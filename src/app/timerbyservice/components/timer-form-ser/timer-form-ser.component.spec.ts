import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerFormSerComponent } from './timer-form-ser.component';

describe('TimerFormSerComponent', () => {
  let component: TimerFormSerComponent;
  let fixture: ComponentFixture<TimerFormSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerFormSerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerFormSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
