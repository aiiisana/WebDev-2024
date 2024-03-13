import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PhotosInterface } from '../models/photos';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }

  getPhotos(id: number): Observable<PhotosInterface[]> {
    return this.http.get<PhotosInterface[]>(
      `https://jsonplaceholder.typicode.com/albums/${id}/photos`
    );
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(
      `https://jsonplaceholder.typicode.com/albums/${id}`
    );
  }

  deleteAlbum(id: number) {
    return this.http.delete(
      `https://jsonplaceholder.typicode.com/albums/${id}`
    );
  }

  // updateAlbum(id: number, newTitle: string) {
  //   return this.http.patch(
  //     `https://jsonplaceholder.typicode.com/albums/${id}`,
  //     `{"title":"${newTitle}"}`
  //   );
  // }
}
