import { Injectable } from '@angular/core';
import {HeaderDataModel} from "./header-data.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerDataModel = new BehaviorSubject<HeaderDataModel>({
    title: 'Login',
    icon: 'login',
    routeUrl: ''
  });
  constructor() { }

  get headerDataModel(): HeaderDataModel{
    return this._headerDataModel.value
  }
  set headerDataModel(headerDataModel:HeaderDataModel){
    this._headerDataModel.next(headerDataModel)
  }
}
