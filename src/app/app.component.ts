import { Component } from '@angular/core';
import { MazoService } from './mazo.service';
import { Carta } from './models/carta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sayMyName';
  cartaActual:Carta;

  constructor(private mazoService: MazoService) { }

  ngOnInit(): void {
    this.cartaActual = this.mazoService.proximaCarta;
  }

  onActualizarCarta(event)
  {
    console.log(this.cartaActual);
    this.mazoService.updateCarta(this.cartaActual.id,event);
    this.cartaActual = this.mazoService.proximaCarta;
  }
}

