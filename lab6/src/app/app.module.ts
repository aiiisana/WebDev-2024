import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsDetailsComponent } from './albums-details/albums-details.component';
import { AlbumsPhotosComponent } from './albums-photos/albums-photos.component';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { AlbumService } from './album.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlbumsComponent,
    AlbumsDetailsComponent,
    AlbumsPhotosComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [AlbumService],
  bootstrap: [AppComponent],
})
export class AppModule {}
