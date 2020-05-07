import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home-movie',
  templateUrl: './home-movie.component.html',
  styleUrls: ['./home-movie.component.scss'],
  providers: [MovieService]
})
export class HomeMovieComponent implements OnInit {

  constructor(
    private _movieService: MovieService
  ) { }

  ngOnInit(): void {
    this._movieService.getMovies().subscribe((data: any[]) => {
      console.log('get all movies', data);
    });
  }

}
