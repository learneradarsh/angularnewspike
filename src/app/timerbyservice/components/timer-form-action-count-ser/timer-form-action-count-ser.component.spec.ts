import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerFormActionCountSerComponent } from './timer-form-action-count-ser.component';

describe('TimerFormActionCountSerComponent', () => {
  let component: TimerFormActionCountSerComponent;
  let fixture: ComponentFixture<TimerFormActionCountSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerFormActionCountSerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerFormActionCountSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
