import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css']
})
export class AccionesComponent implements OnInit {
  @Output() actualizarCarta = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onBotonPresionado(resolucion)
  {
    this.actualizarCarta.emit(resolucion);
  }
}
