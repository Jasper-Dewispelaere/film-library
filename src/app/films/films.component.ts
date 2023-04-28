import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { FilmService } from '../film.service';
import { Observable, catchError } from 'rxjs';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Genre } from '../genre';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: Film[] = [];
  genres: Genre[] = [];
  selectedGenre: any;
  errorMessage: string | undefined;
  onHorror: boolean = false;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((data) => {
      this.films = data;
    });
    this.filmService.getGenres().subscribe((data) => {
      this.genres = data;
    });
  }

  allGenres(): void {
    this.filmService.getFilms().subscribe((data) => {
      this.films = data;
    });
  }

  selectGenre(genreId: any): void {

    if (genreId === "00000000-0000-0000-0000-000000000008") {
      this.onHorror = true;
    }
    else{
      this.onHorror = false;
    }
    this.filmService.getFilms().subscribe((data) => {
      this.films = data.filter(film => film.genre.id === genreId);
    });
  }
}
