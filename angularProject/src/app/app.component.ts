import { Component } from '@angular/core';
import {AuthService} from "./components/template/login/auth.service";

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'
})
export class AppComponent {

  mostrarMenu: boolean = false;
  mostrarLogin:boolean = true;



  constructor(private authService:AuthService) {
  }

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
        mostrar =>this.mostrarMenu = mostrar

    );
    this.authService.mostrarLoginEmitter.subscribe(
            esconder=>this.mostrarLogin = esconder
        )

  }

}
