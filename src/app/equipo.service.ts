import { Injectable } from '@angular/core';
import { Equipo } from './models/equipo';
import { shuffle,take } from 'lodash';
import { Jugador } from './models/jugador';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipos: Equipo[];
  equipoActual: Equipo;
  jugadorActual: Jugador;
  minCantTurnosEquipo: number;
  minCantTurnosJugador: number;
  constructor() {
    this.createEquipos();
    // this.setNextEquipo();
   }

  createEquipos()
  {
    this.equipos = [{
      id: 2,
      nombre: "EquipoAzul",
      color: "#0000FF",
      puntaje: 0,
      turnos: 0,
      jugadores: [
        {
          id: 3,
          nombre: "Benicio",
          turnos: 0
        },
        {
          id: 4,
          nombre: "Romualdo",
          turnos: 0,
        }
      ]
    },
    {
      id: 1,
      nombre: "EquipoRojo",
      color: "#FF0000",
      puntaje: 0,
      turnos: 0,
      jugadores: [
        {
          id: 1,
          nombre: "Carlos",
          turnos: 0,
        },
        {
          id: 2,
          nombre: "Roberto",
          turnos: 0,
        }
      ]
    }
  ]
  }

  setNextEquipo()
  {
    this.equipos.forEach(equipo =>{
      if( typeof this.minCantTurnosEquipo == 'undefined'  || equipo.turnos<this.minCantTurnosEquipo)
      {
        this.minCantTurnosEquipo = equipo.turnos;
      }
    });
    this.equipoActual = shuffle(this.equipos.filter(equipo=>equipo.turnos == this.minCantTurnosEquipo))[0];
    this.minCantTurnosEquipo = undefined;
    this.equipoActual.turnos++,
    this.setNextJugador();
    // **bitch

  }

  setNextJugador()
  {
    // console.log(this.equipoActual.jugadores);
    this.equipoActual.jugadores.forEach(jugador =>{
      if( typeof this.minCantTurnosJugador == 'undefined'  || jugador.turnos<this.minCantTurnosJugador)
      {
        this.minCantTurnosJugador = jugador.turnos;
      }
    });
    this.jugadorActual = shuffle(this.equipoActual.jugadores.filter(jugador=>jugador.turnos == this.minCantTurnosJugador))[0];
    this.minCantTurnosJugador = undefined;
    this.jugadorActual.turnos++;
  }


  get equipoActualNombre()
  {
    return this.equipoActual.nombre;
  }
  get equipoActualTurnos()
  {
    return this.equipoActual.turnos;
  }

  get jugadorActualNombre()
  {
    return this.jugadorActual.nombre;
  }
  get jugadorActualTurnos()
  {
    // console.log(this.jugadorActual);
    return this.jugadorActual.turnos;
  }
}
