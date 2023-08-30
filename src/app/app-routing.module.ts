import { CoresSquareComponent } from './cores-square/cores-square.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { NewNoteComponent } from './componentes/new-note/new-note.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent
  },
  {
    path:'criar-nota',
    component: NewNoteComponent
  },
  {
    path: 'colorir',
    component:CoresSquareComponent
    },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

