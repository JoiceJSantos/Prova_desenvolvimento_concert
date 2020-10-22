import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HeaderService} from "../../components/template/header/header.service";


@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router:Router, private headerService: HeaderService) {
    headerService.headerDataModel ={
      title: 'Produtos',
      icon:'shopping_cart',
      routeUrl:'/products'

    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreat():void{
    this.router.navigate(['/products/create'])
  }


}