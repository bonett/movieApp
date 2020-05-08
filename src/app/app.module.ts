/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ReactiveFormsModule } from '@angular/forms'

/* Components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HomeMovieComponent } from './features/feature-movie/pages/home-movie/home-movie.component';
import { TopMovieComponent } from './features/feature-movie/pages/top-movie/top-movie.component';
import { NewMovieComponent } from './features/feature-movie/pages/new-movie/new-movie.component';
import { MovieDetailComponent } from './features/feature-movie/components/movie-detail/movie-detail.component';
import { MovieFormComponent } from './features/feature-movie/components/movie-form/movie-form.component';
import { MovieListComponent } from './features/feature-movie/components/movie-list/movie-list.component';
import { NoPageFoundComponent } from './core/components/no-page-found/no-page-found.component';

/* Services */
import { StorageService } from './core/services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
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
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(StorageService, { delay: 500 }),
    SharedModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
