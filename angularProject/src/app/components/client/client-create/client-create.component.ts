import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import{Client} from '../client';
import {ClientService} from '../clientservice';
import {Router} from "@angular/router";
import {HeaderService} from "../../template/header/header.service";




@Component({
  selector: 'app-client',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  client : FormGroup;

  constructor(private clientService:ClientService, private router: Router, private headerService:HeaderService) {
    headerService.headerDataModel={
      title:'Cadastar Clientes',
      icon:'person_add',
      routeUrl:'client/create'
    }
  }

  ngOnInit(){
    this.createForm(new Client());
  }
  createForm(client : Client){
    this.client= new FormGroup({
      id : new  FormControl(client.id),
      name: new FormControl(client.name),
      age: new FormControl(client.age),
      birth: new FormControl(client.birth),
      CPF: new FormControl(client.CPF),
      genero:new FormControl(client.genero),
      address: new FormControl(client.address),

    })

  }

  createClient(): void{
    this.clientService.create(this.client.value).subscribe(()=>{
      this.clientService.showMessage('Cliente Cadastrado!')
      this.router.navigate(['/client'])

    })


  }
  cancel(): void{
    this.router.navigate(['/client'])
  }

}
