import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckGridComponent } from './truck-grid.component';
import { AgGridModule } from 'ag-grid-angular';

describe('TruckGridComponent', () => {
  let component: TruckGridComponent;
  let fixture: ComponentFixture<TruckGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AgGridModule ],
      declarations: [TruckGridComponent]
    });
    fixture = TestBed.createComponent(TruckGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
