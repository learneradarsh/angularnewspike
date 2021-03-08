import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownCounterSerComponent } from './count-down-counter-ser.component';

describe('CountDownCounterSerComponent', () => {
  let component: CountDownCounterSerComponent;
  let fixture: ComponentFixture<CountDownCounterSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownCounterSerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownCounterSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
