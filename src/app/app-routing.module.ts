import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCompaniesComponent } from './modules/list-companies/list-companies.component';
import { EditCompanyComponent } from './modules/edit-company/edit-company.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'companies-list',
        pathMatch: 'full'
      },
      {
        path: 'companies-list',
        component:ListCompaniesComponent
      },
      {
        path: 'companies-edit/:id',
        component:EditCompanyComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
