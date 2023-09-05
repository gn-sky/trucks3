import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Truck } from '../truck';

@Component({
  selector: 'app-truck-grid',
  templateUrl: './truck-grid.component.html'
})
export class TruckGridComponent {
  rowData: Truck[] = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Modeo', price: 32000 },
    { make: 'Tesls', model: 'S', price: 91000 }
  ];
  colDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];
}
