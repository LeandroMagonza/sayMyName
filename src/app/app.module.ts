import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './juego/header/header.component';
import { TimerComponent } from './juego/header/timer/timer.component';
import { InformacionMazoComponent } from './juego/header/informacion-mazo/informacion-mazo.component';
import { JugadorActualComponent } from './juego/header/jugador-actual/jugador-actual.component';
import { CartaActualComponent } from './juego/carta-actual/carta-actual.component';
import { AccionesComponent } from './juego/acciones/acciones.component';
import { PuntajeEquipoComponent } from './juego/header/puntaje-equipo/puntaje-equipo.component';
import { MazoService } from './mazo.service';
import { EquipoService } from './equipo.service';
import { JuegoComponent } from './juego/juego.component';
import { Routes, RouterModule } from '@angular/router';
import { ProximoTurnoComponent } from './proximo-turno/proximo-turno.component';

const appRoutes: Routes = [
  {path:'',component: JuegoComponent},
  {path:'juego',component: JuegoComponent},
  {path:'proximo-turno',component: ProximoTurnoComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimerComponent,
    InformacionMazoComponent,
    JugadorActualComponent,
    CartaActualComponent,
    AccionesComponent,
    PuntajeEquipoComponent,
    JuegoComponent,
    ProximoTurnoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
