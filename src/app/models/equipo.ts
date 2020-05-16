import { Jugador } from './jugador';

export interface Equipo {
  id: number;
  nombre: string;
  color: string;
  puntaje: number;
  turnos: number;
  jugadores: Jugador[];

}

