import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Vacancy } from '../interfaces/vacancy';
import { VacancyService } from '../vacancy.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacancies-by-company',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './vacancies-by-company.component.html',
  styleUrls: ['./vacancies-by-company.component.css'],
})
export class VacanciesByCompanyComponent implements OnInit {
  companyId!: number;
  vacancies!: Vacancy[];

  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.companyId = +params['id'];
      console.log('Company ID:', this.companyId);
      this.getVacanciesByCompany(this.companyId);
    });
  }

  getVacanciesByCompany(companyId: number): void {
    this.vacancyService
      .getVacanciesByCompany(companyId)
      .subscribe((vacancies) => {
        this.vacancies = vacancies;
      });
  }
}
