import {EventEmitter, Injectable} from '@angular/core';
import {Usuario} from "./usuario";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado : boolean=false;

  mostrarMenuEmitter = new EventEmitter<boolean>();
  mostrarLoginEmitter = new EventEmitter<boolean>();

  constructor(private router:Router) { }

  logar(usuario:Usuario){

    if (usuario.nome==='concert' &&
        usuario.senha==='prova'){
      this.usuarioAutenticado = true
      this.mostrarMenuEmitter.emit(true)
      this.router.navigate(['/'])
      this.mostrarLoginEmitter.emit(false)


    }else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
      this.mostrarLoginEmitter.emit(true)

    }


  }


}
