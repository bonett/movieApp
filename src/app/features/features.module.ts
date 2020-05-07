/* Modules */
import { NgModule } from '@angular/core';

/* Components */
import { HomeMovieComponent } from './feature-movie/pages/home-movie/home-movie.component';
import { TopMovieComponent } from './feature-movie/pages/top-movie/top-movie.component';
import { NewMovieComponent } from './feature-movie/pages/new-movie/new-movie.component';
import { MovieDetailComponent } from './feature-movie/components/movie-detail/movie-detail.component';
import { MovieFormComponent } from './feature-movie/components/movie-form/movie-form.component';
import { MovieListComponent } from './feature-movie/components/movie-list/movie-list.component';

@NgModule({
    imports: [],
    declarations: [
        HomeMovieComponent,
        TopMovieComponent,
        NewMovieComponent,
        MovieDetailComponent,
        MovieFormComponent,
        MovieListComponent,
    ],
    exports: [
        HomeMovieComponent,
        TopMovieComponent,
        NewMovieComponent,
        MovieDetailComponent,
        MovieFormComponent,
        MovieListComponent,
    ]
})
export class FeaturesModule { }