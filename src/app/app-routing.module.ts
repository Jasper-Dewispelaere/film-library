import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmFormComponent } from './film-form/film-form.component';
import { FilmAddComponent } from './film-add/film-add.component';
import { DirectorAddComponent } from './director-add/director-add.component';
import { QuizComponent } from './quiz-components/quiz/quiz.component';

const routes: Routes = [
  { path: '', redirectTo:'/films', pathMatch: 'full' },
  { path: 'films', component: FilmsComponent },
  { path: 'filmdetail/:id', component: FilmDetailComponent },
  { path: 'filmform/:id', component: FilmFormComponent },
  { path: 'filmadd', component: FilmAddComponent },
  { path: 'directoradd', component: DirectorAddComponent },
  { path: 'quiz', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
