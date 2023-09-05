import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { TruckGridComponent } from './truck-grid/truck-grid.component';



@NgModule({
  declarations: [
    TruckGridComponent
  ],
  imports: [
    AgGridModule,
    CommonModule
  ],
  exports: [
    TruckGridComponent
  ]
})
export class FeatureTruckGridModule { }
