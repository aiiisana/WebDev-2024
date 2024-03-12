import { Component, OnInit } from '@angular/core';
import { PhotosInterface } from '../../modules/photos';
import { AlbumService } from '../album.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums-photos.component.html',
  styleUrl: './albums-photos.component.css',
})
export class AlbumsPhotosComponent implements OnInit {
  photos!: PhotosInterface[];
  loaded: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params.get('id')) {
        const id = Number(params.get('id'));
        this.loaded = false;
        this.albumService.getPhotos(id).subscribe((photos) => {
          this.photos = photos;
          this.loaded = true;
        });
      }
    });
  }
}
