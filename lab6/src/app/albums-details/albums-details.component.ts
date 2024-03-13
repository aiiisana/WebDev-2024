import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Album } from '../../models/album';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums-details',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './albums-details.component.html',
  styleUrl: './albums-details.component.css',
})
export class AlbumsDetailsComponent {
  album!: Album;
  loaded: boolean = false;
  title: string = '';
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.get('id')) {
        const postId = Number(params.get('id'));
        this.loaded = false;
        this.albumService.getAlbum(postId).subscribe((album) => {
          this.album = album;
          this.loaded = true;
        });
      }
    });
  }

  changeTitle() {
    if (this.title !== '') {
      this.loading = true;
      this.albumService.updateAlbum(this.album.id, this.title).subscribe(() => {
        this.album.title = this.title;
        this.title = '';
        this.loading = false;
      });
    }
  }
}
