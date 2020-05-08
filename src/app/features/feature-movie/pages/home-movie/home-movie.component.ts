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

  public movies: Array<Movie>;
  public selectedMovie: Movie;

  constructor(
    private _movieService: MovieService
  ) { }

  ngOnInit(): void {
    this._movieService.getMovies()
    .subscribe((res: Array<Movie>) => {
      console.log(res)
      this.movies = res;
    });
  }

  onSelectMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }

  onRemoveMovie(movie: Movie) {
    console.log(movie);
    this._movieService.deleteMovie(movie).subscribe(res => {
      console.log(res, this.movies)
   });
  }

}
