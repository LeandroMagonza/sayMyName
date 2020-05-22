import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @Output() timerUp = new EventEmitter<boolean>();
  timerInterval;
  timer:number = 0;
  maxTimer: number=5;
  constructor() { }

  ngOnInit(): void {
    this.onStartTurn();
  }

  onStartTurn()
  {
    this.timerInterval= setInterval(() =>
    {
      if (this.timer==this.maxTimer)
      {
        this.timer =0;
        this.timerUp.emit();
      }
      else
      {
        this.timer++;
      }

    },1000);
  }

}
