import { Injectable } from '@angular/core';
import { Carta } from './models/carta';
import { biblioteca } from './biblioteca';
import { shuffle,take } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class MazoService {
  mazo: Carta[];

  constructor() {

   }
   createMazo(cantCartas = 25)
   {
     this.mazo = take(shuffle(biblioteca),cantCartas);
   }

   getMazo() {
     return this.mazo;
   }

   

   getProximaCarta(){}


}
