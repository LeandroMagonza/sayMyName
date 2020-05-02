import { Injectable, Output } from '@angular/core';
import { Carta } from './models/carta';
import { biblioteca } from './biblioteca';
import { shuffle,take } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class MazoService {
  static getMazo() {
    throw new Error("Method not implemented.");
  }
  @Output() mazo: Carta[];

  constructor()
  {
    this.createMazo();
  }
  createMazo(cantCartas = 5)
  {
    this.mazo = take(shuffle(biblioteca),cantCartas);
    console.log(this.mazo);
  }
  getMazo() {
    return this.mazo;
  }
  getProximaCarta(){}


}
