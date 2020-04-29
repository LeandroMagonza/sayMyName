import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TimerComponent } from './header/timer/timer.component';
import { InformacionMazoComponent } from './header/informacion-mazo/informacion-mazo.component';
import { JugadorActualComponent } from './header/jugador-actual/jugador-actual.component';
import { PuntajeComponent } from './puntaje/puntaje.component';
import { CartaActualComponent } from './carta-actual/carta-actual.component';
import { AccionesComponent } from './acciones/acciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimerComponent,
    InformacionMazoComponent,
    JugadorActualComponent,
    PuntajeComponent,
    CartaActualComponent,
    AccionesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
