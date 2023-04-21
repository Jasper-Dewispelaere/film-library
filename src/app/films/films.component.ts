import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { FilmService } from '../film.service';
import { Observable, catchError } from 'rxjs';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit{
  films: any;
  errorMessage: string | undefined;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((data) => {
      this.films = data;
      console.log(data);
    })
  }

  /*showFilms() {
    this.filmService.getFilms()
    .subscribe((data: Film) => this.film = {
      id = this.film?.id,
      title = this.film?.title,
      image = this.film?.image,
      releaseYear = this.film?.releaseYear,
    });
  }*/
}