import { Component } from '@angular/core';
import { MazoService } from './mazo.service';
import { Carta } from './models/carta';
import { EquipoService } from './equipo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

