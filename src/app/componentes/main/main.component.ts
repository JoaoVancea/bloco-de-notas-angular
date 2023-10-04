import { Component } from '@angular/core';
import { Nota } from 'src/app/nota';
import { NotaService } from '../service/nota.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private service: NotaService) { };

  ngOnInit(): void {
    this.service.listar().subscribe((listaNotas) => {

      this.listaNotas = listaNotas
    })
  }

  listaNotas: Nota[] = [];
}

