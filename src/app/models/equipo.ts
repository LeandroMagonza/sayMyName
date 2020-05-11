import { Jugador } from './jugador';

export interface Equipo {
  id: number;
  nombreEquipo: string;
  colorEquipo: string;
  puntajeEquipo: number;
  turnosEquipo: number;
  jugadores: Jugador[];

}

