import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckGridComponent } from './truck-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

describe('TruckGridComponent', () => {
  let component: TruckGridComponent;
  let fixture: ComponentFixture<TruckGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AgGridModule,
        AngularFireModule.initializeApp(environment.firebase),
      ],
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
