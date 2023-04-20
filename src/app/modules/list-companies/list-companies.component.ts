import { Component } from '@angular/core';
import { IBrand, ICompanie } from 'src/app/core/models/companie-model';
import compagnies from '@assets/companies-list.json'
import brands from '@assets/brands-list.json'
import moment from "moment"
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService } from '@app/core/services/company.service';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css']
})
export class ListCompaniesComponent {
  /* array */
  displayedColumns: string[] = ['Status', 'Name', 'Type', 'Brand',"Submission",'actions'];
  compannieList:ICompanie[]=compagnies.requests
  brandList:IBrand[]=brands
  /* moment */
  moment=moment
  /* formGroup */
  searchForm:FormGroup=this.createFormFilter()
  constructor(private route :Router,private formBuilder:FormBuilder,private companyService:CompanyService) { }
  /* redirection to edit the shosen company */
  editCompany(companie:ICompanie){
    this.companyService.setCompanyData(companie)
    this.route.navigate([`companies-edit/${companie.requestId}`])
  }
  createFormFilter(){
    return this.formBuilder.group({
    name:null,
    typeBrand:null
  })
    }
    search(){
      let filteredList:ICompanie[]=[]
    if(this.searchForm.get('name')?.value){
      filteredList=compagnies.requests
      .filter((el:ICompanie)=>el.campaignName.toLowerCase().includes(this.searchForm.get('name')?.value.toLowerCase()))
    }
    if(this.searchForm.get('typeBrand')?.value){
      let array = this.searchForm.get('name')?.value? filteredList : compagnies.requests
      this.compannieList= array.filter((el:ICompanie)=>el.brand.brandId == this.searchForm.get('typeBrand')?.value)
      return this.compannieList 
    }
    this.compannieList = filteredList
    return this.compannieList 
    }
}
