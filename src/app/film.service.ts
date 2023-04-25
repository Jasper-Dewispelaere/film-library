import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from './film';
import { Genre } from './genre';
import { Director } from './director';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  filmUrl = 'https://localhost:5001/api/';

  getFilms() {
    return this.http.get<Film[]>(this.filmUrl + "Films/");
  }

  getDirectors() {
    return this.http.get<Director[]>(this.filmUrl + "Directors/");
  }

  getGenres() {
    return this.http.get<Genre[]>(this.filmUrl + "Genres/");
  }

  getFilm(filmId: string): Observable<Film> {
    return this.http.get<Film>(this.filmUrl + "Films/" + filmId);
  }

  SaveFilm(film: any): Observable<any> {
    return this.http.put<any>(this.filmUrl + "films", film)
      .pipe(
        catchError(this.handleError<any>('SaveFilm'))
      );
  }

  AddFilm(film: any): Observable<any> {
    return this.http.post<any>(this.filmUrl + "films", film)
      .pipe(
        catchError(this.handleError<any>('AddFilm'))
      );
  }

  AddDirector(director: any): Observable<any> {
    return this.http.post<any>(this.filmUrl + "directors", director)
      .pipe(
        catchError(this.handleError<any>('AddDirector'))
      );
  }

  DeleteFilm(filmId: string) {
    return this.http.delete<string>(this.filmUrl + "films/" + filmId)
      .pipe(
        catchError(this.handleError<any>('DeleteFilm'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
