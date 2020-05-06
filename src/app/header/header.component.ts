import { Component, OnInit, Input } from '@angular/core';
import { MazoService } from '../mazo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() cantMazoCompleto:number;
  @Input() cantMazoRestante:number;
  constructor(private mazoService: MazoService ) {
  }

  ngOnInit(): void {
  }

}
