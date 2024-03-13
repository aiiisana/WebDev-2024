import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
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
  title: string = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.get('id')) {
        const postId = Number(params.get('id'));
        this.albumService.getAlbum(postId).subscribe((album) => {
          this.album = album;
        });
      }
    });
  }

  changeTitle() {
    if (this.title !== '') {
      this.albumService.updateAlbum(this.album.id, this.title).subscribe(() => {
        this.album.title = this.title;
        this.title = '';
      });
    }
  }
}
