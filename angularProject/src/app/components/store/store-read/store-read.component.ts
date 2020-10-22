import { Component, OnInit, Output } from '@angular/core';
import {StoreService} from "../store.service";
import {Store} from "../store";
import {HeaderService} from "../../template/header/header.service";

@Component({
  selector: 'app-store-read',
  templateUrl: './store-read.component.html',
  styleUrls: ['./store-read.component.css']
})


export class StoreReadComponent implements OnInit {
  @Output() store: Store[];
  displayedColumns = ['name', 'cnpj', 'local','address'];


  constructor(private storeService:StoreService, private headerService: HeaderService) {
      headerService.headerDataModel={
      title:'Lojas',
      icon:'store_mall_directory',
      routeUrl:'store'
    }
  }

  ngOnInit(): void {
     this.storeService.read().subscribe(store=>{
       this.store = store;
          console.log(store)
   })
  }

}