import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDataInGridComponent } from './display-data-in-grid.component';

describe('DisplayDataInGridComponent', () => {
  let component: DisplayDataInGridComponent;
  let fixture: ComponentFixture<DisplayDataInGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDataInGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDataInGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
