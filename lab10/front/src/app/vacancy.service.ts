import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from './interfaces/vacancy';
import { Company } from './interfaces/company';

@Injectable({
  providedIn: 'root',
})
export class VacancyService {
  private apiUrl = 'http://127.0.0.1:8000/api/vacancies/';

  constructor(private http: HttpClient) {}

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.apiUrl);
  }

  getVacanciesByCompany(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(
      `http://127.0.0.1:8000/api/companies/${companyId}/vacancies`
    );
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.apiUrl}${id}/`);
  }

  getTopTen(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}top_ten/`);
  }
}
