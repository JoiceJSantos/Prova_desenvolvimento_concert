import { Component, OnInit, Input } from '@angular/core';
import{Client} from '../client'
import {ClientService} from '../clientservice';


@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements OnInit {
    client: Client[];
    displayedColumns = ['name', 'age', 'birth','CPF','genero','address', 'action'];


  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
     this.clientService.read().subscribe(client=>{
       this.client = client;
          console.log(client)
   })
  }

}
