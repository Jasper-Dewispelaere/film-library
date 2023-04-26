import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { FilmService } from '../film.service';
import { Observable, catchError } from 'rxjs';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: Film[] = [];
  action: any;
  errorMessage: string | undefined;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((data) => {
      this.films = data;
      this.action = this.films.find(i => i.genre.id == '00000000-0000-0000-0000-000000000001');
      
      console.log(this.films);
      console.log(this.action);
    })
  }
}
