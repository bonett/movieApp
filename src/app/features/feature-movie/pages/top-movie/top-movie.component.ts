import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-top-movie',
  templateUrl: './top-movie.component.html',
  styleUrls: ['./top-movie.component.scss']
})
export class TopMovieComponent implements OnInit {

  public movies: Array<Movie>;

  constructor(
    private _movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getTop5Movies();
  }

  getTop5Movies() {
    this._movieService.getTopMovies()
      .subscribe((res: Array<Movie>) => {
        this.movies = res;
      });
  }
}
