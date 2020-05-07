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

@NgModule({
  declarations: [
    AppComponent,
    SharedButtonComponent,
    DateFormatPipe,
    NavbarComponent,
    HomeMovieComponent,
    TopMovieComponent,
    NewMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
