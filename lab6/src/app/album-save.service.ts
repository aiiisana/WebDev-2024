import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlbumSaveService {
  private titleMap: { [id: number]: string } = {};

  constructor() {}

  setTitle(albumId: number, title: string) {
    this.titleMap[albumId] = title;
  }

  getTitle(albumId: number): string {
    return this.titleMap[albumId];
  }
}
