import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HeaderService} from "../../components/template/header/header.service";

@Component({
  selector: 'app-client-crud',
  templateUrl: './client-crud.component.html',
  styleUrls: ['./client-crud.component.css']
})
export class ClientCrudComponent implements OnInit {

  constructor(private router:Router, private headerService:HeaderService) {
    headerService.headerDataModel={
      title:'Clientes',
      icon:'perm_identity',
      routeUrl:'client'
    }
  }

  ngOnInit(): void {
  }
  navigateToClientCreat():void{
    this.router.navigate(['client/create'])
  }
}