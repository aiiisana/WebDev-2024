import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../interfaces/vacancy';
import { VacancyService } from '../vacancy.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css'],
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = [];

  constructor(
    private vacancyService: VacancyService,
    private companyService: CompanyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.vacancyService.getVacancies().subscribe((data: Vacancy[]) => {
      this.vacancies = data as Vacancy[];

      this.vacancies.forEach((vacancy) => {
        this.companyService
          .getCompany(+vacancy.company)
          .subscribe((company) => {
            vacancy.company = company;
          });
      });
    });
  }

  viewVacancyDetails(vacancyId: number): void {
    this.router.navigate(['/vacancies', vacancyId]);
  }

  viewTopTen(): void {
    this.vacancyService.getTopTen().subscribe((data: Vacancy[]) => {
      this.vacancies = data as Vacancy[];
    });
  }
}
