import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient) {}

  getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbumDetails(albumId: number) {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/albums/${albumId}`
    );
  }

  getPhotos(albumId: number) {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
    );
  }
}
