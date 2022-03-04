import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}


  getQuery( query : string ) {
    const apiUrl : string = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCGMTTps_VhmZad9yB6hFT_0F34wILJRBvWk6v8FLTW4nB7-KMubTcZmXiXmItvPEPOXgVJPgkoFvwk07I'
    });
    return this.http.get(apiUrl, {headers})
  }

  getNewReleases() {
   return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( (data:any) => data['albums'].items))
  };

  getArtists(termino: string) {
   return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
   .pipe(map((data : any ) => data['artists'].items))
  };

  getArtist(id: string) {
   return this.getQuery(`artists/${id}`);
  };

  getTopTracks(id: string) {
   return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe( map( (data : any) => data['tracks']))
  };
}
