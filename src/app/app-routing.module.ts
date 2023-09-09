import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'truck-grid', loadChildren: () => import('./feature-truck-grid/feature-truck-grid.module').then(m => m.FeatureTruckGridModule) },
  { path: '', loadChildren: () => import('./feature-truck-grid/feature-truck-grid.module').then(m => m.FeatureTruckGridModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
