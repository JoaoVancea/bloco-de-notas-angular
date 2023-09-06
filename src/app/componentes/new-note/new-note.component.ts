import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent {
  @Input() nota = {
    titulo: "AAAAAA",
    conteudo: "TESTE",
    tipo: "tipo1"
  }
  tamanhoNota(): string{
    if(this.nota.conteudo.length >= 150){
      return 'nota-g'
    }
    return 'nota-p'
  }
}
