import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Truck } from '../truck';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-truck-grid',
  templateUrl: './truck-grid.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
// export class TruckGridComponent implements OnInit, OnChanges {
export class TruckGridComponent implements OnInit, OnDestroy {
// export class TruckGridComponent implements OnChanges {
  // user: Observable<any> = of(null);
  // user2 = this.authService.user$;
  // user = this.authService.getUser();
  // user: Observable<any> = of(null);
  // private userSubscription: Subscription; // Declare a subscription variable
  // user3: any;
  // user$ = this.authService.user$;
  // user4 = { name: 'a'};
  // user4 = 'a';
  user4: any;

  rowData: Truck[] = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Modeo', price: 32000 },
    { make: 'Tesla', model: 'S', price: 91000 }
  ];
  colDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    // { field: 'action' }
  ];
  
  constructor(private authService: AuthServiceService, private cdRef: ChangeDetectorRef) {
    // // this.user = this.authService.getUser();
    // this.user3 = null;
    this.authService.user$.subscribe((u: any) => {
      console.log('AppComponent constructor new User', u);
      this.user4 = u;
    })           
    // this.userSubscription = this.authService.user$.subscribe((u: any) => {
    //   console.log('TruckGridComponent constructor new User', u);
    //   this.user2 = u;
    // })
    // this.userSubscription = this.authService.user$.subscribe((u: any) => {
    // this.authService.user$.subscribe((u: any) => {
    //   setTimeout(() => {
    //     console.log('TruckGridComponent constructor new User', u);
    //     this.user4 = u;
    //     // this.user4 = { name: 'b'};
    //     // this.user4 = 'b';
    //     this.cdRef.detectChanges(); // Manually trigger change detection        
    //   }
    //     , 1000
    //   )
    // })    
  }
  // constructor(private authService: AuthServiceService, private zone: NgZone) {
  //   this.zone.runOutsideAngular(() => {
  //     this.authService.user$.subscribe((u: any) => {
  //       setTimeout(() => {
  //         console.log('TruckGridComponent constructor new User', u);
  //         this.user4 = 'b';
  //       }, 1000);
  //     });
  //   });
  // }  
  // constructor(private authService: AuthServiceService, private zone: NgZone) {
  //   this.authService.user$.subscribe((u: any) => {
  //     this.zone.run(() => {
  //       setTimeout(() => {
  //         console.log('TruckGridComponent constructor new User', u);
  //         this.user4 = { name: 'b'};
  //       }, 1000);
  //     });
  //   });
  // }  
  ngOnDestroy(): void {
    // Unsubscribe from the subscription to prevent memory leaks
    // if (this.userSubscription) {
    //   this.userSubscription.unsubscribe();
    // }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // return;
    // this.authService.user$.subscribe((u: any) => {
    //   console.log('TruckGridComponent ngOnChanges new User', u);
    //   this.user2 = u;
    // })
  }

  ngOnInit(): void {
    return;
    // this.userSubscription = this.authService.user$.subscribe((u: any) => {
    //   setTimeout(() => {
    //     console.log('TruckGridComponent ngOnInit new User', u);
    //     this.user2 = u;
    //   }
    //     , 1000
    //   )
    // })
  }
}
