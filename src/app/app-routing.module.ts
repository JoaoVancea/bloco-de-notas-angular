import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { MainComponent } from './componentes/main/main.component';
import { NewNoteComponent } from './componentes/new-note/new-note.component';


const routes: Routes = [
  {
    path: 'home',
    component: MainComponent
  },
  {
    path:'criar-nota',
    component:NewNoteComponent
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

