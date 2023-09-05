import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeatureTruckGridModule } from './feature-truck-grid/feature-truck-grid.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureTruckGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
