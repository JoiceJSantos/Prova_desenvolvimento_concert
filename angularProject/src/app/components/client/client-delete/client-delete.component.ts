import { Component, OnInit } from '@angular/core';
import {ClientService} from "../clientservice";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {HeaderService} from "../../template/header/header.service";

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {
    client : FormGroup
 constructor(
      private  clientService : ClientService,
      private  router:Router,
      private route:ActivatedRoute,
      private formBuilder: FormBuilder,
      private headerService:HeaderService
  ) {
        headerService.headerDataModel={
            title:'Excluir Clientes',
            icon:'person_remove',
            routeUrl:'client/delete'
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
    })

  }
  deleteClient():void{
    this.clientService.delete(this.client.value.id).subscribe(()=>{
      this.clientService.showMessage('Cliente excluído com sucesso!!!')
      this.router.navigate(['/client'])

    })

  }
  cancel():void{
    this.router.navigate(['/client'])
  }
}