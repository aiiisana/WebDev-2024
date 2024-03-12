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
  title = 'lab6';
  constructor(private router: Router) {}

  goToHome() {
    return this.router.navigateByUrl('/home');
  }

  goToAbout() {
    return this.router.navigateByUrl('/about');
  }

  goToAlbums() {
    return this.router.navigateByUrl('/albums');
  }
}
