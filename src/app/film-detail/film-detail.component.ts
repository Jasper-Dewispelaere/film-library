import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Film } from '../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit{
  film: any;
  
  ngOnInit(): void {
    this.getFilmDetails();
  }
  
  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private location: Location
  ) {}

  getFilmDetails(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.filmService.getFilm(id)
      .subscribe(film => this.film = film);
      console.log(this.film);
  }
}
