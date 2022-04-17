import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking-timer',
  templateUrl: './tracking-timer.component.html',
  styleUrls: ['./tracking-timer.component.css']
})
export class TrackingTimerComponent implements OnInit {
  startDate: any;
  stopDate: any;
  timeFasting: any;
  timeFastingH: any;
  timeFastingM: any;
  fastingDuration: string = '';
  activeFasting: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  startTimer(): void {
    this.startDate = new Date();
    localStorage.setItem('startDate', this.startDate);
    this.startDate = '';
    this.activeFasting = true;
  }

  stopTimer(): void {
    this.stopDate = new Date();
    this.activeFasting = false;
    this.startDate = localStorage.getItem('startDate');
    localStorage.removeItem('startDate');
    this.timeFasting = (this.stopDate.getTime() - new Date(this.startDate).getTime());

    this.timeFastingH = Math.floor((this.timeFasting % 86400000) / 3600000); // hours
    this.timeFastingM = Math.round(((this.timeFasting % 86400000) % 3600000) / 60000); // minutes
    this.fastingDuration = `You have been fasting for ${this.timeFastingH} hours and ${this.timeFastingM} minutes`;
  }

}
