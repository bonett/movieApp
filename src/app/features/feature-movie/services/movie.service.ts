import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from './../models/movie';
import { AppSettings } from 'src/app/core/constants/app-settings';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url_base: string = AppSettings.getApi('movies');

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Allows get all movies
   * @param null
   */
  public getMovies() {
    return this.httpClient.get(this.url_base);
  }

  /**
   * Allows get movie by id
   * @param id number
   */
  public getMovieById(id) {
    return this.httpClient.get(`${this.url_base}/${id}`);
  }

  /**
   * Allows create new movie
   * @param movie Movie 
   */
  public createMovie(movie: Movie) {
    return this.httpClient.post(`${this.url_base}`, movie)
  }

  /**
   * Allows remove movie selected by Id
   * @param id number
   */
  public deleteMovie(id) {
    return this.httpClient.delete(`${this.url_base}/${id}`)
  }

  /**
   * Allows update movie selected by Id
   * @param id number
   */
  public updateMovie(movie: Movie) {
    return this.httpClient.put(`${this.url_base}/${movie.id}`, movie)
  }
}
