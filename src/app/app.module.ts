import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmFormComponent } from './film-form/film-form.component';
import { FilmAddComponent } from './film-add/film-add.component';
import { DirectorAddComponent } from './director-add/director-add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizComponent } from './quiz-components/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmDetailComponent,
    FilmFormComponent,
    FilmAddComponent,
    FilmAddComponent,
    DirectorAddComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
