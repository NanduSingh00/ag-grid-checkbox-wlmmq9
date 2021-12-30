import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {AgGridModule} from 'ag-grid-angular';
import "ag-grid-enterprise";
import { AgGridExampleComponent } from './ag-grid-example/ag-grid-example.component';
import { AgGridCheckboxComponent } from './ag-grid-checkbox/ag-grid-checkbox.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  AgGridModule.withComponents([/*optional Angular Components to be used in the grid*/]), ],
  declarations: [ AppComponent, AgGridExampleComponent, AgGridCheckboxComponent ],
  entryComponents: [AgGridCheckboxComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
