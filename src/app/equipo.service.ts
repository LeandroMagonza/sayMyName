import { Injectable } from '@angular/core';
import { Equipo } from './models/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipos: Equipo[];
  constructor() { }

  createEquipos(){
    this.equipos = [{
      id: 2,
      nombreEquipo: "EquipoAzul",
      colorEquipo: "Azul",
      puntajeEquipo: 0,
      jugadores: [
        {
          id: 3,
          nombreJugador: "Benicio",
        },
        {
          id: 4,
          nombreJugador: "Romualdo",
        }
      ]
    },
    {
      id: 1,
      nombreEquipo: "EquipoRojo",
      colorEquipo: "Rojo",
      puntajeEquipo: 0,
      jugadores: [
        {
          id: 1,
          nombreJugador: "Carlos",
        },
        {
          id: 2,
          nombreJugador: "Roberto",
        }
      ]
    }
  ]
  }
}
