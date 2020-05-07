import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { HomeMovieComponent } from './features/feature-movie/pages/home-movie/home-movie.component';
import { NewMovieComponent } from './features/feature-movie/pages/new-movie/new-movie.component';
import { TopMovieComponent } from './features/feature-movie/pages/top-movie/top-movie.component';
import { NoPageFoundComponent } from './core/components/no-page-found/no-page-found.component';
import { MovieDetailComponent } from './features/feature-movie/components/movie-detail/movie-detail.component';

/* Routes */
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeMovieComponent },
  { path: 'home/:id', component: MovieDetailComponent },
  { path: 'new_movie', component: NewMovieComponent },
  { path: 'top_movies', component: TopMovieComponent },

  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
