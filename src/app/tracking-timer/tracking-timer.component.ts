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
    if('activeFasting' in localStorage) {
      this.activeFasting = JSON.parse(localStorage.getItem('activeFasting') || '{}');
      console.log(this.activeFasting);
    }
  }

  startTimer(): void {
    this.startDate = new Date();
    this.activeFasting = true;
    localStorage.setItem('startDate', this.startDate);
    localStorage.setItem('activeFasting', JSON.stringify(this.activeFasting));
    this.startDate = '';
  }

  stopTimer(): void {
    this.stopDate = new Date();
    this.activeFasting = false;
    localStorage.removeItem('activeFasting');
    this.startDate = localStorage.getItem('startDate');
    localStorage.removeItem('startDate');
    this.timeFasting = (this.stopDate.getTime() - new Date(this.startDate).getTime());

    this.timeFastingH = Math.floor((this.timeFasting % 86400000) / 3600000); // hours
    this.timeFastingM = Math.round(((this.timeFasting % 86400000) % 3600000) / 60000); // minutes
    this.fastingDuration = `You have been fasting for ${this.timeFastingH} hours and ${this.timeFastingM} minutes`;
  }

}
