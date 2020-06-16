import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';


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
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.onStartTurn();
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  onStartTurn()
  {
    this.timerInterval= setInterval(() =>
    {
      if (this.timer==this.maxTimer)
      {
        // this.timer =0;
        // this.timerUp.emit();
        this.router.navigateByUrl('proximo-turno');

      }
      else
      {
        this.timer++;
      }

    },1000);
  }

}
