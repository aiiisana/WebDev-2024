import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../interfaces/company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css'],
})
export class CompanyDetailComponent implements OnInit {
  companyId!: number;
  company!: Company;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.companyId = params['id'];
      this.getCompanyDetails(this.companyId);
    });
  }

  getCompanyDetails(id: number): void {
    this.companyService.getCompany(id).subscribe((company) => {
      this.company = company;
    });
  }

  viewVacancies(): void {
    this.router.navigate(['/companies', this.companyId, 'vacancies']);
  }
}
