import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Movie } from './../models/movie';
import { AppSettings } from 'src/app/core/constants/app-settings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url_base: string = AppSettings.getApi('movies');

  constructor(
    private _httpClient: HttpClient
  ) { }

  /**
   * Allows get all movies
   * @param null
   */
  public getMovies(): Observable<Movie[]> {
    return this._httpClient.get<Movie[]>(this.url_base)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Allows create new movie
   * @param movie Movie 
   */
  createMovie(movie: Movie): Observable<Movie> {
    return this._httpClient.post<Movie>(this.url_base, movie)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Allows remove movie selected by Id
   * @param movie number | Movie
   */
  deleteMovie(movie: number | Movie): Observable<Movie> {
    const id = typeof movie === 'number' ? movie : movie.id;
    return this._httpClient.delete<Movie>(`${this.url_base}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(handleError: any): import("rxjs").OperatorFunction<Movie[], any> {
    throw new Error("Method not implemented.");
  }
}
