import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { LateBarComponent } from './componentes/late-bar/late-bar.component';
import { NewNoteComponent } from './componentes/new-note/new-note.component';
import { MainComponent } from './componentes/main/main.component';
import { CriarNotaComponent } from './componentes/criar-nota/criar-nota.component';
import { BackgroundComponent } from './componentes/background/background.component';
import { CoresSquareComponent } from './cores-square/cores-square.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    LateBarComponent,
    NewNoteComponent,
    MainComponent,
    CriarNotaComponent,
    BackgroundComponent,
    CoresSquareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
