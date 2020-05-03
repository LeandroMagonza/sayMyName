import { Injectable } from '@angular/core';
import { Carta, EstadoCarta } from './models/carta';
import { biblioteca } from './biblioteca';
import { shuffle,take } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class MazoService {
  static getMazo() {
    throw new Error("Method not implemented.");
  }
  mazo: Carta[];

  constructor()
  {
    this.createMazo();
  }
  createMazo(cantCartas = 5)
  {
    this.mazo = take(shuffle(biblioteca),cantCartas);
    // console.log(this.mazo);
  }
  getMazoCompleto() {
    return this.mazo;
  }
  get mazoEnJuego() {
    return this.mazo.filter(carta=>carta.estado == EstadoCarta.MAZO);
  }
  get mazoEnJuegoYDescarte() {
    return this.mazo.filter(carta=>carta.estado == EstadoCarta.MAZO || carta.estado == EstadoCarta.DESCARTE);
  }
  get proximaCarta()
  {
    return this.mazoEnJuego[0];
  }

  updateCarta(id: number,resolucion: "incorrecta"|"correcta")
  {
    let cartaActualizar = this.mazo.find(carta=>carta.id == id);
    switch (resolucion) {
      case "correcta":
        cartaActualizar.estado = EstadoCarta.JUGADOR;
        break;
      case "incorrecta":
        cartaActualizar.estado = EstadoCarta.DESCARTE;
        break;

        }
    // console.log(this.mazo);
  }


}
