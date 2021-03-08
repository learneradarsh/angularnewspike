import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownCounterComponent } from './count-down-counter.component';

describe('CountDownCounterComponent', () => {
  let component: CountDownCounterComponent;
  let fixture: ComponentFixture<CountDownCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
