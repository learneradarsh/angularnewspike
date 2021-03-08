import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerFormActionCountComponent } from './timer-form-action-count.component';

describe('TimerFormActionCountComponent', () => {
  let component: TimerFormActionCountComponent;
  let fixture: ComponentFixture<TimerFormActionCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerFormActionCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerFormActionCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
