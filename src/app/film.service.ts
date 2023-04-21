import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from './film';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  filmUrl = 'https://localhost:5001/api/Films/';

  getFilms() {
    return this.http.get<Film[]>(this.filmUrl);
  }

  getFilm(filmId: string){
     return this.http.get<Film>(this.filmUrl + filmId);
  }
}
