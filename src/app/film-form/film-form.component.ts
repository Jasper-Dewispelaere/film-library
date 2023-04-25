import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';
import { Location } from '@angular/common';
import { Film } from '../film';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css']
})
export class FilmFormComponent {
  filmToEdit?: Film;
  genres: any;
  directors: any;

  ngOnInit(): void {
    this.getFilmToEdit();
  }

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private location: Location
  ) { }

  getFilmToEdit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.filmService.getFilm(id)
      .subscribe(film => this.filmToEdit = film);

    this.filmService.getDirectors().subscribe((data) => {
      this.directors = data;
    });

    this.filmService.getGenres().subscribe((data) => {
      this.genres = data;
    });
  }

  saveFilm(): void {
    if (this.filmToEdit) {
      let film = {
        id: this.filmToEdit.id,
        title: this.filmToEdit.title,
        releaseYear: this.filmToEdit.releaseYear,
        image: this.filmToEdit.image,
        genreId: this.filmToEdit.genre.id,
        directorId: this.filmToEdit.director.id,
      }
      this.filmService.SaveFilm(film)
      .subscribe((data) => {
        this.filmToEdit = data;
        this.goBack();
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
