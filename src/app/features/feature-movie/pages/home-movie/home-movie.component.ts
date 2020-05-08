import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import _ from "lodash";

@Component({
  selector: 'app-home-movie',
  templateUrl: './home-movie.component.html',
  styleUrls: ['./home-movie.component.scss'],
  providers: [MovieService]
})
export class HomeMovieComponent implements OnInit {

  public movies: Array<Movie> = [];
  public selectedMovie: Object = null;

  constructor(
    private _movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  /**
   * Allows get all movies from storage
   */
  getMovies() {
    this.movies = this._movieService.getAllMovies();
  }

  /**
   * Allows remove movie from movie list
   * @param movie Movie
   */
  removeMovie(movie: Movie) {

    this.movies = _.remove(this.movies,(currentMovie) => {
      return currentMovie.id !== movie.id
    });

    this._movieService.deleteMovie(movie);
    this.selectedMovie = null;
  }

  /**
   * Allows select movie to show details
   * @param movie Movie
   */
  selectMovie(movie: Movie) {
    this.selectedMovie = movie;
  }

}
