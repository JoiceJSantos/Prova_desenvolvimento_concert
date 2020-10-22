import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Router} from '@angular/router';
import {Product} from "../product.model";
import {HeaderService} from "../../template/header/header.service";


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

    product: Product = {
    name:'',
    price: null,
    Brand: '',
    acquisition:null,
    condition: '',
    discount: '',

  }


  constructor(private productService: ProductService ,
              private router :Router, private headerService:HeaderService) {
        headerService.headerDataModel ={
            title:'Cadastro de produtos',
            icon: 'add_shopping_cart',
            routeUrl:'/products/create'

        }

  }

  ngOnInit(): void {

  }
  createProduct(): void{
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showMessage('Produto Cadastrado!')
      this.router.navigate(['/products'])

    })


  }
  cancel(): void{
    this.router.navigate(['/products'])
  }

}
