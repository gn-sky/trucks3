import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { TruckRow } from './model/truck-row';
import { AuthService } from '../../auth/auth.service';
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
  colDefs: ColDef[] = [];

  user$ = this.authService.user$.pipe(
    tap((user: any) => {
      this.colDefs = this.getColumns(user);
    })
  );

  constructor(private authService: AuthService) { }

  private getAnonymousUserColumns = (): ColDef[] => [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];

  private getColumns = (user: any): ColDef[] => {
    let columns: ColDef[] = this.getAnonymousUserColumns();
    if (user) {
      columns.push({ field: 'action' });
    }
    return columns;
  };
}
