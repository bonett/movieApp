/* Modules */
import { Component, OnInit } from '@angular/core';

/* Model */
import { Movie } from '../../models/movie';

/* Service */
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home-movie',
  templateUrl: './home-movie.component.html',
  styleUrls: ['./home-movie.component.scss'],
  providers: [MovieService]
})
export class HomeMovieComponent implements OnInit {

  public movies: Array<Movie>;

  constructor(
    private _movieService: MovieService
  ) { }

  ngOnInit(): void {
    this._movieService.getMovies().subscribe((res: Array<Movie>) => {
      this.movies = res;
    });
  }

}
