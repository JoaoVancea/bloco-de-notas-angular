import { Component, Input } from '@angular/core';
import { Nota } from 'src/app/nota';
import { NotaService } from '../service/nota.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css'],
})
export class NewNoteComponent {

  constructor(private service: NotaService, private router: Router){}

  nota: Nota= {
    titulo: '',
    conteudo: '',
    tipo: 'tipo1'
  }
  criarNota(){
    this.service.criar(this.nota).subscribe(() => {
      this.router.navigate(['/main'])
    })
  }
}


