import { Component, OnInit, Input } from '@angular/core';
import { EquipoService } from 'src/app/equipo.service';


@Component({
  selector: 'app-jugador-actual',
  templateUrl: './jugador-actual.component.html',
  styleUrls: ['./jugador-actual.component.css']
})
export class JugadorActualComponent implements OnInit {

  constructor(private equipoService: EquipoService) { }
  ngOnInit(): void {
  }

    public get equipoActualNombre(): string {
      return this.equipoService.equipoActualNombre;
    }
    public get jugadorActualNombre(): string {
      return this.equipoService.jugadorActualNombre;
    }

}
