import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable, map } from 'rxjs';

import { Album } from '../../modules/album';
import { PhotosInterface } from '../../modules/photos';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loaded: boolean = false;

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.showAlbums();
  }

  showAlbums() {
    this.albumService
      .getAlbums()
      .subscribe((data) => (this.albums = data as any));
    this.loaded = true;
  }

  delete(id: number) {
    this.albums = this.albums.filter((a) => a.id !== id);
    this.albumService.deleteAlbum(id).subscribe(() => {
      console.log('deleted album sucessfully');
    });
  }
}
