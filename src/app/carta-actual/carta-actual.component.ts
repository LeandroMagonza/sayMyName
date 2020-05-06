import { Component, OnInit, Input } from '@angular/core';
import { MazoService } from "../mazo.service";
import { Carta } from '../models/carta';

@Component({
  selector: 'app-carta-actual',
  templateUrl: './carta-actual.component.html',
  styleUrls: ['./carta-actual.component.css']
})
export class CartaActualComponent implements OnInit {
  @Input() cartaActual: Carta;
  constructor(private mazoService: MazoService) { }

  ngOnInit(): void {


  }

}
