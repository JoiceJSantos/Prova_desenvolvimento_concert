import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData}from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import {ProductCreateComponent} from './components/product/product-create/product-create.component';
import {FormsModule} from '@angular/forms';
import {ProductReadComponent} from './components/product/product-read/product-read.component';
import {ClientCreateComponent } from './components/client/client-create/client-create.component';
import {ProductUpdateComponent } from './components/product/product-update/product-update.component';
import {ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import {AuthService} from "./components/template/login/auth.service";
import {LoginComponent} from "./components/template/login/login.component"


//import Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule} from '@angular/material/form-field/';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from '@angular/forms';
import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { ClientReadComponent } from './components/client/client-read/client-read.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { StoreReadComponent } from './components/store/store-read/store-read.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';

registerLocaleData(localePt ,'pt')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ClientCreateComponent,
    ClientCrudComponent,
    ClientReadComponent,
    ClientUpdateComponent,
    StoreReadComponent,
    ClientDeleteComponent,
    LoginComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatSnackBarModule,
        HttpClientModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSelectModule,
        ReactiveFormsModule


    ],
  providers: [
      {
          provide:LOCALE_ID,
          useValue:'pt-Br'

      },
      {
          provide:AuthService,
      }
  ],

   bootstrap: [AppComponent]
})
export class AppModule {
  private static MomentDateAdapter: any;
}
