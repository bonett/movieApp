import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

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

  getMovies() {
    this.movies = this._movieService.getAllMovies();
  }

  removeMovie(movie: Movie) {
    for (let i = 0; i < this.movies.length; i++) {
      if (this.movies[i].id == movie.id) {
        this.movies.splice(i, 1);
      }
    }

    this._movieService.deleteMovie(movie);
    this.selectedMovie = null;
  }

  selectMovie(movie: Movie) {
    this.selectedMovie = movie;
  }

}
