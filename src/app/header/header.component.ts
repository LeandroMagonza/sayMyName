import { Component, OnInit } from '@angular/core';
import { MazoService } from '../mazo.service';
import { Carta } from '../models/carta';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mazo: Carta[];
  constructor(private mazoService: MazoService ) {
    this.mazo = mazoService.getMazo();
  }

  ngOnInit(): void {
  }

}
