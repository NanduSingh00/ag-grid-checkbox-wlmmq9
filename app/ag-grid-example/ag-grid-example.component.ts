import { Component, OnInit } from '@angular/core';
import { AgGridCheckboxComponent } from '../ag-grid-checkbox/ag-grid-checkbox.component';

@Component({
  selector: 'app-ag-grid-example',
  templateUrl: './ag-grid-example.component.html',
  styleUrls: ['./ag-grid-example.component.css']
})
export class AgGridExampleComponent implements OnInit {


columnDefs = [
    {headerName: 'Check Box', cellRendererFramework: AgGridCheckboxComponent, field: 'cbox'},
    {headerName: 'Amount', field: 'amount', editable: true}
  ];

  rowData = [
    {cbox: false, amount: 1},
    {cbox: true, amount: 2},
    {cbox: true, amount: 3},
  ];

  gridOptions = {
    animateRows: true,
    enableSorting: true,
    enableCellChangeFlash: true,
    onGridReady: params => {
      params.api.sizeColumnsToFit();
    }
  };

  constructor() { }

  ngOnInit() {
  }

}