import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FilmService } from '../film.service';
import { Film } from '../film';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  film?: Film;

  ngOnInit(): void {
    this.getFilmDetails();
  }

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private location: Location
  ) { }

  getFilmDetails(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.filmService.getFilm(id)
      .subscribe(film => this.film = film);
  }

  deleteFilm(filmId: any): void {
    this.filmService.DeleteFilm(filmId)
      .subscribe(data => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
