import { Injectable } from '@angular/core';
import { ICompanie } from '../models/companie-model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
dataCompany!:ICompanie
  constructor() { }
  setCompanyData(data:ICompanie){
    this.dataCompany=data
    }
    getCompanyData(){
      return this.dataCompany
    }
}
