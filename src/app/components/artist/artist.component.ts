import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {
  artist : any = {};
  loadingArtist : boolean = true
  topTracks: any;

  constructor(private router : ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  getArtist(id: string){
    this.spotify.getArtist(id)
      .subscribe(artist => this.artist = artist)
      this.loadingArtist = false
  };

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
      .subscribe(topTracks => {
        console.log(topTracks)
        this.topTracks = topTracks
      })
  }
}
