import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PhotosInterface } from '../modules/photos';
import { Album } from '../modules/album';

@Injectable()
export class AlbumService {
  constructor(private http: HttpClient) {}

  getAlbums() {
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

  updateAlbum(id: number, newTitle: string) {
    return this.http.patch(
      `https://jsonplaceholder.typicode.com/albums/${id}`,
      `{"title":"${newTitle}"}`
    );
  }
}
