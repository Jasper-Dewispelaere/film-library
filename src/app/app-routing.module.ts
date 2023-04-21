import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmFormComponent } from './film-form/film-form.component';

const routes: Routes = [
  { path: '', redirectTo:'/films', pathMatch: 'full' },
  { path: 'films', component: FilmsComponent },
  { path: 'filmdetail/:id', component: FilmDetailComponent },
  { path: 'filmform', component: FilmFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
