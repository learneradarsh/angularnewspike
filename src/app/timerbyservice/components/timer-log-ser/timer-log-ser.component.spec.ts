import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerLogSerComponent } from './timer-log-ser.component';

describe('TimerLogSerComponent', () => {
  let component: TimerLogSerComponent;
  let fixture: ComponentFixture<TimerLogSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerLogSerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerLogSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
