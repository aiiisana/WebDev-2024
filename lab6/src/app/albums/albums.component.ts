import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { Album } from '../../models/album';
import { AlbumService } from '../album.service';
import { CommonModule } from '@angular/common';

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

  constructor(private router: Router, private albumService: AlbumService) {}

  ngOnInit() {
    this.showAlbums();
  }

  showAlbums() {
    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data as Album[];
      this.loaded = true;
    });
  }

  delete(id: number) {
    this.albums = this.albums.filter((a) => a.id !== id);
    this.albumService.deleteAlbum(id).subscribe(() => {
      console.log('Deleted');
    });
  }

  goBack() {
    this.router.navigateByUrl('/home');
  }
}
