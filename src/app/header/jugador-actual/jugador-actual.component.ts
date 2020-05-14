import { Component, OnInit, Input } from '@angular/core';
import { EquipoService } from 'src/app/equipo.service';


@Component({
  selector: 'app-jugador-actual',
  templateUrl: './jugador-actual.component.html',
  styleUrls: ['./jugador-actual.component.css']
})
export class JugadorActualComponent implements OnInit {
  @Input() datosJugadorActual: {nombreJugador:string,nombreEquipo:string,colorEquipo:string};
  constructor(private equipoService: EquipoService) { }

  ngOnInit(): void {
  }

}
