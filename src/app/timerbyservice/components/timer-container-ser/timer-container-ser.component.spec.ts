import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerContainerSerComponent } from './timer-container-ser.component';

describe('TimerContainerSerComponent', () => {
  let component: TimerContainerSerComponent;
  let fixture: ComponentFixture<TimerContainerSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerContainerSerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerContainerSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
