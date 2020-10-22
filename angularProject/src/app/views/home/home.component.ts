import { Component, OnInit } from '@angular/core';
import {HeaderDataModel} from "../../components/template/header/header-data.model";
import {HeaderService} from "../../components/template/header/header.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(private headerService:HeaderService) {
    headerService.headerDataModel = {
      title: 'Início',
      icon:'home',
      routeUrl: '/'

    }
  }

  ngOnInit(): void {

  }

}
