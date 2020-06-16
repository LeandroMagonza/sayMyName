import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-proximo-turno',
  templateUrl: './proximo-turno.component.html',
  styleUrls: ['./proximo-turno.component.css']
})
export class ProximoTurnoComponent implements OnInit {

  constructor(public equipoService: EquipoService) { }

  ngOnInit(): void {
    // console.log("pt "+this.equipoService.equipoActualNombre);
    this.equipoService.setNextEquipo();
  }

}
