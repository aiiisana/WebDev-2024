import { Component, OnInit } from '@angular/core';
import { Company } from '../interfaces/company';
import { CompanyService } from '../company.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.companyService.getCompanies().subscribe((data) => {
      this.companies = data as Company[];
    });
  }

  showVacancies() {}
}
