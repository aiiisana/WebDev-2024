import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'front';
  constructor(private router: Router) {}

  goToHome() {
    return this.router.navigateByUrl('/home');
  }

  goToAbout() {
    return this.router.navigateByUrl('/about');
  }

  goToCompanies() {
    return this.router.navigateByUrl('/companies');
  }

  goToVacancies() {
    return this.router.navigateByUrl('/vacancies');
  }
}
