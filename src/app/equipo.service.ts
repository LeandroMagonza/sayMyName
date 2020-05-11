import { Injectable } from '@angular/core';
import { Equipo } from './models/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipos: Equipo[];
  equipoActual: number = 0;
  jugadorActual: number = 0;
  constructor() { }

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
      if( typeof minCantTurnosEquipo == 'undefined'  || equipo.turnosEquipo<minCantTurnosEquipo)
      {
        minCantTurnosEquipo == equipo.turnosEquipo;
      }
    });
  }
}
