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

@NgModule({
  declarations: [CompanyListComponent, VacancyListComponent, AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [CompanyService, VacancyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
