import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {Client} from "./client";
import {EMPTY, Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {FormGroup} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})

export class ClientService {
  baseUrl = "http://localhost:3001/client"
  private client: Client;



constructor(private snackBar: MatSnackBar,
              private http: HttpClient) { }

  showMessage(msg:string, isError:boolean=false):void{
    this.snackBar.open(msg,'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition:"top",
      panelClass:isError?['msg-error']:['msg-success']
    })
  }

  create(client: Client): Observable<Client>{
    return this.http.post<Client>(this.baseUrl,client).pipe(
        map(obj => obj),
        catchError(e=>this.errorHandler(e))
    );
  }
  errorHandler(e:any):Observable<any>{
    this.showMessage('Ocorreu um erro!',true)
    return EMPTY

  }

  read():Observable<Client[]>{
    return this.http.get<Client[]>(this.baseUrl).pipe(
        map(obj => obj),
        catchError(e=>this.errorHandler(e))
    );
  }

  readById(id:string): Observable<Client>{
    const url = `${this.baseUrl}/${id}`
    return  this.http.get<Client>(url).pipe(
        map(obj => obj),
        catchError(e=>this.errorHandler(e))
    );

  }
  update(client:Client): Observable<Client>{
    const url = `${this.baseUrl}/${client.id}`
    return this.http.put<Client>(url,client).pipe(
        map(obj => obj),
        catchError(e=>this.errorHandler(e))
    );
  }

    delete(id:number): Observable<Client>{
      const url = `${this.baseUrl}/${id}`
      return this.http.delete<Client>(url).pipe(
          map(obj => obj),
          catchError(e=>this.errorHandler(e))
      );
    }
}