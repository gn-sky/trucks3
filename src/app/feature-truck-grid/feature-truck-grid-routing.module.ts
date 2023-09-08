import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TruckGridComponent } from './truck-grid/truck-grid.component';

const routes: Routes = [
  { path: '', component: TruckGridComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureTruckGridRoutingModule { }
