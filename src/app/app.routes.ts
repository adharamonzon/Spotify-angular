import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';

//definicion de rutas que se van a utilizar
export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'artist/:id', component: ArtistComponent},
  { path: '', pathMatch: 'full', redirectTo:'home' }, //cualquier ruta vacia me redirecciona a home
  { path: '**', pathMatch: 'full', redirectTo:'home' } //cualquier ruta que contenga otra cosa (**) me redirecciona a home
]
