import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedButtonComponent } from './shared/components/shared-button/shared-button.component';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HomeMovieComponent } from './features/feature-movie/pages/home-movie/home-movie.component';
import { TopMovieComponent } from './features/feature-movie/pages/top-movie/top-movie.component';
import { NewMovieComponent } from './features/feature-movie/pages/new-movie/new-movie.component';
import { MovieDetailComponent } from './features/feature-movie/components/movie-detail/movie-detail.component';
import { MovieFormComponent } from './features/feature-movie/components/movie-form/movie-form.component';
import { MovieListComponent } from './features/feature-movie/components/movie-list/movie-list.component';
import { NoPageFoundComponent } from './core/components/no-page-found/no-page-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedButtonComponent,
    DateFormatPipe,
    NavbarComponent,
    HomeMovieComponent,
    TopMovieComponent,
    NewMovieComponent,
    MovieDetailComponent,
    MovieFormComponent,
    MovieListComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
