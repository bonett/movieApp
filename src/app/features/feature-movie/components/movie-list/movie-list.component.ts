import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input() movieList: Array<Movie>;
  @Output() onSelectMovie = new EventEmitter<Movie>();
  @Output() onRemoveMovie = new EventEmitter<Movie>();

  public selectedMovie: Object = null;
  
  constructor() { }

  ngOnInit(): void { }

  /**
   * Allows keep movie selected
   * @param movie Movie
   */
  handleSelectMovie(movie: Movie) {
    this.selectedMovie = movie;
    this.onSelectMovie.emit(movie);
  }

  /**
   * Allows submit a movie to remove
   * @param movie Movie
   */
  handleRemoveMovie(movie: Movie) {
    this.onRemoveMovie.emit(movie);
  }

}
