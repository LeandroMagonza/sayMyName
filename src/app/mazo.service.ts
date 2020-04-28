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
   createMazo(cantCartas)
   {
     this.mazo = take(shuffle(biblioteca),25);
   }

   getMazo() {
     return this.mazo;
   }

   getProximaCarta(){}

   
}
