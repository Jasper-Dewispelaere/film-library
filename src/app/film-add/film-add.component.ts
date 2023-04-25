import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';
import { Location } from '@angular/common';
import { UUID } from 'angular2-uuid';
import { Film } from '../film';
import { Genre } from '../genre';
import { Director } from '../director';

@Component({
  selector: 'app-film-add',
  templateUrl: './film-add.component.html',
  styleUrls: ['./film-add.component.css']
})
export class FilmAddComponent implements OnInit{
  filmToAdd?: Film;
  genres: any;
  directors: any;
  uuidValue?:string;

  ngOnInit(): void {
    this.fillOptions();
    console.log(this.filmToAdd);
  }

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private location: Location
  ) { }

  generateUUID(){
    this.uuidValue=UUID.UUID();
    return this.uuidValue;
  }

  fillOptions() {
    this.filmService.getDirectors().subscribe((data) => {
      this.directors = data;
    });

    this.filmService.getGenres().subscribe((data) => {
      this.genres = data;
    });

    var genr: Genre;
    genr = {
      id: '',
      name: ''
    }

    var directo: Director;
    directo = {
      id: '',
      name: ''
    }

    this.filmToAdd = {
      id: this.generateUUID(),
      title: '',
      image: '',
      releaseYear: 0,
      genre: genr,
      director: directo
    }
  }

  saveFilm(): void {
    if (this.filmToAdd) {
      let film = {
        id: this.filmToAdd.id,
        title: this.filmToAdd.title,
        releaseYear: this.filmToAdd.releaseYear,
        image: this.filmToAdd.image,
        genreId: this.filmToAdd.genre.id,
        directorId: this.filmToAdd.director.id,
      }
      this.filmService.AddFilm(film)
      .subscribe((data) => {
        this.filmToAdd = data;
        this.goBack();
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}