import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AppSettings } from './../constants/app-settings';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements InMemoryDbService {

  constructor() { }

  /**
   * Allows create dummy storage to get top movies
   */
  createDb() {
    const movies = AppSettings.getMockMovies;
    return { movies };
  }

  /**
   * Allows create local storage of movies
   */
  loadStorage() {
    if (localStorage.getItem('movies') === null || localStorage.getItem('movies') == undefined) {
      localStorage.setItem('movies', JSON.stringify([]));
    }
  }
}