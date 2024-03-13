import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsDetailsComponent } from './albums-details/albums-details.component';
import { AlbumsPhotosComponent } from './albums-photos/albums-photos.component';
import { NgModule } from '@angular/core';
import { AlbumService } from './album.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: AlbumsDetailsComponent },
  { path: 'albums/:id/photos', component: AlbumsPhotosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule, CommonModule],
  exports: [RouterModule],
  providers: [AlbumService],
})
export class AppRoutingModule {}
