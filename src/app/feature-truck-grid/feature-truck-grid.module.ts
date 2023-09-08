import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { TruckGridComponent } from './truck-grid/truck-grid.component';
import { FeatureTruckGridRoutingModule } from './feature-truck-grid-routing.module';


@NgModule({
  declarations: [
    TruckGridComponent
  ],
  imports: [
    AgGridModule,
    CommonModule,
    FeatureTruckGridRoutingModule
  ],
  exports: [
    TruckGridComponent
  ]
})
export class FeatureTruckGridModule { }
