import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';
import { Location } from '@angular/common';
import { UUID } from 'angular2-uuid';
import { Director } from '../director';

@Component({
  selector: 'app-director-add',
  templateUrl: './director-add.component.html',
  styleUrls: ['./director-add.component.css']
})
export class DirectorAddComponent implements OnInit{
  directorToAdd?: Director;
  genres: any;
  directors: any;
  uuidValue?:string;

  ngOnInit(): void {
    this.GenerateNewDirector();
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

  GenerateNewDirector() {
    this.directorToAdd = {
      id: this.generateUUID(),
      name: ''
    }
  }

  saveDirector(): void {
    if (this.directorToAdd) {
      let director = {
        id: this.directorToAdd.id,
        name: this.directorToAdd.name
      }
      this.filmService.AddDirector(director)
      .subscribe((data) => {
        this.directorToAdd = data;
        this.goBack();
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}