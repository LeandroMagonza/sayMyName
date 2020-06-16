import { Component, OnInit, Input } from '@angular/core';
import { EquipoService } from 'src/app/equipo.service';


@Component({
  selector: 'app-jugador-actual',
  templateUrl: './jugador-actual.component.html',
  styleUrls: ['./jugador-actual.component.css']
})
export class JugadorActualComponent implements OnInit {

  constructor(public equipoService: EquipoService) { }
  ngOnInit(): void {
  }

}
