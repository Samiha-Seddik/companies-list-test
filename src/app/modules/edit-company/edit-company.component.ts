import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IBrand, ICompanie, IMedia } from '@app/core/models/companie-model';
import { CompanyService } from '@app/core/services/company.service';
import brands from '@assets/brands-list.json'
import media from '@assets/media.json'
@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent {
  brandList:IBrand[]=brands
  mediaList:IMedia[]=media
  companySelected!:ICompanie
  selectedMedia!:IMedia[]
  editCompanyForm:FormGroup=this.createCompanyForm()
  constructor(private companyService:CompanyService,private formBuilder:FormBuilder,private route:Router){}
ngOnInit(){
  this.setEditForm()
}
/* get company data and set the edit form */
setEditForm(){
this.companySelected=this.companyService.getCompanyData()
if(this.companySelected){
  this.selectedMedia=this.companySelected?.media
this.editCompanyForm=this.createCompanyForm(this.companySelected)
}else {
  this.route.navigate(['/companies-list'])
}
}
createCompanyForm(companyData?:ICompanie) {
  return this.formBuilder.group({
    requestId:[companyData?.requestId||null, Validators.required],
    campaignName: [companyData?.campaignName||'',[Validators.required]],
    brandId: [companyData?.brand?.brandId||null,[Validators.required]],
    media:[companyData?.media || null,[Validators.required,Validators.minLength(1)]],
    submittedDate:[companyData?.submittedDate||null,Validators.required]
  });
}
/* check media list */
checkedMedia(mediaID:number){
  if(this.editCompanyForm.get('media')?.value?.find((el:{mediaId:number})=>el.mediaId==mediaID)){
    return true
  } else {
    return false
  }
}
saveEdit(){
  if(this.editCompanyForm.valid){
  }
}
}
