import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from './interfaces/vacancy';

@Injectable({
  providedIn: 'root',
})
export class VacancyService {
  constructor(private http: HttpClient) {}

  getVacanciesByCompany(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(
      `http://127.0.0.1:8000/api/companies/${companyId}/vacancies/`
    );
  }
}
