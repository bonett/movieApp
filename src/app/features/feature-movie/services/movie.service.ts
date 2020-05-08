import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Movie } from './../models/movie';
import { AppSettings } from 'src/app/core/constants/app-settings';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/core/services/storage.service';
import _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class MovieService extends StorageService {

  private url_base: string = AppSettings.getApi('movies');

  constructor(
    private _httpClient: HttpClient
  ) {
    super();
    this.loadStorage();
  }

  /**
   * Allows get all movies
   * @param null
   */
  public getAllMovies() {
    const data = this.getStorage();
    return data;
  }

  /**
   * Allows get top 5 movies
   * @param null
   */
  public getTopMovies(): Observable<Movie[]> {
    return this._httpClient.get<Movie[]>(this.url_base)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
     * Allows create new movie
     * @param movie Movie 
     */
  createMovie(newMovie: Movie) {
    let data = this.getStorage();
    data.push(newMovie);
    sessionStorage.setItem('movies', JSON.stringify(data));
  }

  /**
   * Allows remove movie selected by Id
   * @param movie number | Movie
   */
  deleteMovie(movie: Movie) {
    const id = typeof movie === 'number' ? movie : movie.id;
    let data = this.getStorage();

    data = _.remove(data,(currentMovie) => {
      return currentMovie.id !== movie.id
    });

    sessionStorage.setItem('movies', JSON.stringify(data));
  }

  private getStorage() {
    return JSON.parse(sessionStorage.getItem('movies'));
  }

  private handleError(handleError: any): import("rxjs").OperatorFunction<Movie[], any> {
    throw new Error("Method not implemented.");
  }
}
