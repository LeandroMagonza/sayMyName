import { Component, OnInit, Input } from '@angular/core';
import { MazoService } from 'src/app/mazo.service';

@Component({
  selector: 'app-informacion-mazo',
  templateUrl: './informacion-mazo.component.html',
  styleUrls: ['./informacion-mazo.component.css']
})
export class InformacionMazoComponent implements OnInit {

  constructor(private mazoService: MazoService) { }
  @Input() cantMazoRestante;
  @Input() cantMazoCompleto;
  
  ngOnInit(): void {
  }

}
