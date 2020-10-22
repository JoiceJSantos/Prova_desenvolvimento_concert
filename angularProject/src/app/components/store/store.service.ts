import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {EMPTY, Observable} from "rxjs";
import {Client} from "../client/client";
import {catchError, map} from "rxjs/operators";
import {Store} from "./store";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  baseUrl = "http://localhost:3001/store"

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
  errorHandler(e:any):Observable<any>{
    this.showMessage('Ocorreu um erro!',true)
    return EMPTY

  }
  read():Observable<Store[]>{
    return this.http.get<Store[]>(this.baseUrl).pipe(
        map(obj => obj),
        catchError(e=>this.errorHandler(e))
    );
  }

  readById(id:string): Observable<Store>{
    const url = `${this.baseUrl}/${id}`
    return  this.http.get<Store>(url).pipe(
        map(obj => obj),
        catchError(e=>this.errorHandler(e))
    );

  }

}