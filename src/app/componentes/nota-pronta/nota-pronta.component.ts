import { Component, Input } from '@angular/core';
import { Nota } from 'src/app/nota';

@Component({
  selector: 'app-nota-pronta',
  templateUrl: './nota-pronta.component.html',
  styleUrls: ['./nota-pronta.component.css']
})
export class NotaProntaComponent {
  @Input() nota:Nota = {
    id:0,
    titulo: "",
    conteudo: "",
    tipo: ""
  }
  tamanhoNota(): string{
    if(this.nota.conteudo.length >= 150){
      return 'nota-g'
    }
    return 'nota-p'
  }
}
