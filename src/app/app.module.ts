import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TimerComponent } from './header/timer/timer.component';
import { InformacionMazoComponent } from './header/informacion-mazo/informacion-mazo.component';
import { JugadorActualComponent } from './header/jugador-actual/jugador-actual.component';
import { CartaActualComponent } from './carta-actual/carta-actual.component';
import { AccionesComponent } from './acciones/acciones.component';
import { PuntajeEquipoComponent } from './header/puntaje-equipo/puntaje-equipo.component';
import { MazoService } from './mazo.service';
import { EquipoService } from './equipo.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimerComponent,
    InformacionMazoComponent,
    JugadorActualComponent,
    CartaActualComponent,
    AccionesComponent,
    PuntajeEquipoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MazoService,EquipoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
