import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CompanyService } from './company.service';
import { VacancyService } from './vacancy.service';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';

export const routes: Routes = [
  { path: 'companies', component: CompanyListComponent },
  { path: 'vacancies', component: VacancyListComponent },
  //{path: 'home', component: HomeComponent},
  // { path: 'companies/:id', component: CompanyListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule, CommonModule],
  exports: [RouterModule],
  providers: [CompanyService, VacancyService],
})
export class AppRoutingModule {}
