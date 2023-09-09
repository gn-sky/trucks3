import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { TruckGridComponent } from './truck-grid/truck-grid.component';
import { RouterModule } from '@angular/router';


const routes = [
  { path: '', component: TruckGridComponent}
]

@NgModule({
  declarations: [
    TruckGridComponent
  ],
  imports: [
    AgGridModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    TruckGridComponent
  ]
})
export class FeatureTruckGridModule { }
