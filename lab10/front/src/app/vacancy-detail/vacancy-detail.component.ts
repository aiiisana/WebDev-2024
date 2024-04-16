import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../interfaces/vacancy';
import { VacancyService } from '../vacancy.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacancy-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './vacancy-detail.component.html',
  styleUrl: './vacancy-detail.component.css',
})
export class VacancyDetailComponent implements OnInit {
  vacancyId!: number;
  vacancy!: Vacancy;

  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.vacancyId = params['id'];
      this.getVacancyDetails(this.vacancyId);
    });
  }

  getVacancyDetails(id: number): void {
    this.vacancyService
      .getVacancy(id)
      .subscribe((vacancy) => (this.vacancy = vacancy));
  }
}
