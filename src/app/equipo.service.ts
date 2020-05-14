import { Injectable } from '@angular/core';
import { Equipo } from './models/equipo';
import { shuffle,take } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipos: Equipo[];
  equipoActualID: number;
  equipoActualNombre: string;
  jugadorActualID: number;
  jugadorActualNombre: string;
  minCantTurnosEquipo: number;
  constructor() {
    this.createEquipos();
    this.getNextEquipo();
   }

  createEquipos()
  {
    this.equipos = [{
      id: 2,
      nombreEquipo: "EquipoAzul",
      colorEquipo: "#0000FF",
      puntajeEquipo: 0,
      turnosEquipo: 0,
      jugadores: [
        {
          id: 3,
          nombreJugador: "Benicio",
          turnosJugador: 0
        },
        {
          id: 4,
          nombreJugador: "Romualdo",
          turnosJugador: 0,
        }
      ]
    },
    {
      id: 1,
      nombreEquipo: "EquipoRojo",
      colorEquipo: "#FF0000",
      puntajeEquipo: 0,
      turnosEquipo: 0,
      jugadores: [
        {
          id: 1,
          nombreJugador: "Carlos",
          turnosJugador: 0,
        },
        {
          id: 2,
          nombreJugador: "Roberto",
          turnosJugador: 0,
        }
      ]
    }
  ]
  }

  getNextEquipo()
  {

    this.equipos.forEach(equipo =>{ 
      if( typeof this.minCantTurnosEquipo == 'undefined'  || equipo.turnosEquipo<this.minCantTurnosEquipo)
      {
        this.minCantTurnosEquipo = equipo.turnosEquipo;
      }
    });
    this.equipoActualID = shuffle(this.equipos.filter(equipo=>equipo.turnosEquipo == this.minCantTurnosEquipo))[0].id;
    console.log(this.equipoActualID);
  }
}
