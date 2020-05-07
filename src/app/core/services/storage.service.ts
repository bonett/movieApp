/* Modules */
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

/* Constants */
import { AppSettings } from './../constants/app-settings';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements InMemoryDbService {

  constructor() { }

  /**
   * Allows create dummy storage as API REST
   */
  createDb() {
    const movies = AppSettings.getMockMovies;
    return { movies };
  }
}