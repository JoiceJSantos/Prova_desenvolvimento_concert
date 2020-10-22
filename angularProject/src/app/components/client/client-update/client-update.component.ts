import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../clientservice";
import {Client} from'../client';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {HeaderService} from "../../template/header/header.service";


@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  client: FormGroup;

  constructor(
      private  clientService:ClientService,
      private router:Router,
      private route:ActivatedRoute,
      private formBuilder: FormBuilder,
      private headerService:HeaderService
  ) {
    headerService.headerDataModel={
      title:'Alterar Clientes',
      icon:'how_to_reg',
      routeUrl:'client/update'
    }
    this.client = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      age: new FormControl(),
      birth: new FormControl(),
      CPF: new FormControl(),
      genero:new FormControl(),
      address: new FormControl()
    })
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.clientService.readById(id).subscribe(client=> {
      console.log("client => ", client);
      this.client.patchValue(client);
    });
  }

  updateClient():void{
    this.clientService.update(this.client.value).subscribe(()=>{
      this.clientService.showMessage('Cliente atualizado com Sucesso!');
      this.router.navigate(['/client']);
    });
  }

  cancel():void{
    this.router.navigate(['/client']);
  };
}