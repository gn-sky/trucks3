import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { TruckRow } from './model/truck-row';
import { AuthService } from '../../services/auth.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-truck-grid',
  templateUrl: './truck-grid.component.html',
  styleUrls: ['./truck-grid.component.scss']
})
export class TruckGridComponent {
  rowData: TruckRow[] = [
    { make: 'Toyota', model: 'Celica', price: 35000, action: 'delete' },
    { make: 'Ford', model: 'Modeo', price: 32000, action: 'delete' },
    { make: 'Tesla', model: 'S', price: 91000, action: 'delete' }
  ];
  colDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'action', hide: true }
  ];

  user$ = this.authService.user$.pipe(
    tap((user: any) => {
      const actionColumn = this.colDefs.find(c => c.field === 'action');
      if (actionColumn) {
        actionColumn.hide = !user;
      }
    })
  );

  constructor(private authService: AuthService) { }
}
