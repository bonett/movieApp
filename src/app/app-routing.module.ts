import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { HomeMovieComponent } from './features/feature-movie/pages/home-movie/home-movie.component';
import { NewMovieComponent } from './features/feature-movie/pages/new-movie/new-movie.component';
import { TopMovieComponent } from './features/feature-movie/pages/top-movie/top-movie.component';
import { NoPageFoundComponent } from './core/components/no-page-found/no-page-found.component';

/* Routes */
const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: HomeMovieComponent },
  { path: 'new_movie', component: NewMovieComponent },
  { path: 'top_movies', component: TopMovieComponent },

  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
