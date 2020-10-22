import { Component, OnInit } from '@angular/core';
import {Product} from "../product.model";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HeaderService} from "../../template/header/header.service";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product:Product

  constructor(
      private  productService:ProductService,
      private  router:Router,
      private route:ActivatedRoute,
      private  headerService:HeaderService
  ) {
    headerService.headerDataModel={
      title:'Excluir Produtos',
      icon:'remove_shopping_cart',
      routeUrl:'product/delete'
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product=>{
      this.product=product
    })

  }
  deleteProduct():void{
    this.productService.delete(this.product.id).subscribe(()=>{
      this.productService.showMessage('Produto excluído com sucesso!!!')
      this.router.navigate(['/products'])

    })

  }
  cancel():void{
    this.router.navigate(['/products'])
  }
}

