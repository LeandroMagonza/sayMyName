import { Component, OnInit } from '@angular/core';
import { Carta } from '../models/carta';
import { MazoService } from '../mazo.service';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent {

  title = 'sayMyName';
  cartaActual:Carta;
  cantMazoCompleto: number;
  cantMazoRestante: number;
  datosJugadorActual: {nombreJugador:string,nombreEquipo:string,colorEquipo:string};
  constructor(private mazoService: MazoService,private equipoService: EquipoService) { }

  ngOnInit(): void {
    this.cartaActual = this.mazoService.proximaCarta;
    this.cantMazoRestante = this.mazoService.mazoEnJuego.length;
    this.cantMazoCompleto = this.mazoService.mazoEnJuegoYDescarte.length;
    // this.datosJugadorActual = this.equipoService.nombreEquipo;

  }

  onActualizarCarta(event)
  {
    // console.log(this.cartaActual);
    this.mazoService.updateCarta(this.cartaActual.id,event);
    this.cartaActual = this.mazoService.proximaCarta;
    this.cantMazoRestante = this.mazoService.mazoEnJuego.length;
    this.cantMazoCompleto = this.mazoService.mazoEnJuegoYDescarte.length;
  }
}
