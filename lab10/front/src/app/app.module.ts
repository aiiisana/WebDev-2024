import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list/company-list.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { AppComponent } from './app.component';
import { CompanyService } from './company.service';
import { VacancyService } from './vacancy.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { VacanciesByCompanyComponent } from './vacancies-by-company/vacancies-by-company.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

@NgModule({
  declarations: [
    CompanyListComponent,
    VacancyListComponent,
    AppComponent,
    VacanciesByCompanyComponent,
    ErrorComponent,
    HomeComponent,
    VacancyDetailComponent,
    CompanyDetailComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [CompanyService, VacancyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
