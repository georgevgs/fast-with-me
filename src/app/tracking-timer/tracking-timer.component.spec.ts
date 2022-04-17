import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingTimerComponent } from './tracking-timer.component';

describe('TrackingTimerComponent', () => {
  let component: TrackingTimerComponent;
  let fixture: ComponentFixture<TrackingTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
