import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from './views/product-crud/product-crud.component';
import {ProductCreateComponent} from './components/product/product-create/product-create.component'
import {ProductUpdateComponent} from "./components/product/product-update/product-update.component";
import {ProductDeleteComponent} from "./components/product/product-delete/product-delete.component";
import {ClientCreateComponent} from "./components/client/client-create/client-create.component";
import {ClientCrudComponent} from "./views/client-crud/client-crud.component";
import {ClientUpdateComponent} from "./components/client/client-update/client-update.component";
import {StoreReadComponent} from "./components/store/store-read/store-read.component";
import {ClientDeleteComponent} from "./components/client/client-delete/client-delete.component";



const routes: Routes = [
    {
      path: "",
      component: HomeComponent
    },
    {
      path: "products",
      component: ProductCrudComponent
    },
    {
        path:"products/create",
        component: ProductCreateComponent
    },
    {
        path:"products/update/:id",
        component: ProductUpdateComponent
    },
    {
        path:"products/delete/:id",
        component: ProductDeleteComponent
    },
    {
        path:"client/create",
        component:ClientCreateComponent
    },
    {
        path:"client",
        component: ClientCrudComponent
    },
    {
        path:"client/update/:id",
        component: ClientUpdateComponent
    },
    {
        path: "store",
        component: StoreReadComponent
    },
    {
        path: "client/delete/:id",
        component: ClientDeleteComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
