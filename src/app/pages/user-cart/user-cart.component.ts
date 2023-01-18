import {Component, OnDestroy, OnInit} from '@angular/core';
import {SelectionModel} from "@angular/cdk/collections";
import {CartDataSourceService} from "./services/cart-data-source.service";
import {UserCartItemModelView} from "../../@domain/user-cart/user-cart-item.model-view";
import {merge, Observable, of, Subject} from "rxjs";
import {map} from "rxjs/operators";
import {CartItemStatus} from 'src/app/@domain/user-cart/types';


@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss'],
})
export class UserCartComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['select', 'name', 'status', 'date', 'price', 'quantity', 'subtotal_price'];
  public dataSource!: CartDataSourceService;
  public selection = new SelectionModel<any>(true, []);

  public rows$!: Observable<UserCartItemModelView[]>;
  public totalPrice$: Observable<number> = of(0);
  CartItemStatus = CartItemStatus
  public quantityChanged$ = new Subject<null>();

  constructor(private cartDataSource: CartDataSourceService) {
  }

  public ngOnInit(): void {
    this.dataSource = this.cartDataSource;
    this.cartDataSource.loadData();

    this.rows$ = this.cartDataSource.connect();

    merge(this.selection.changed, this.quantityChanged$).subscribe({
      next: () => {
        this.totalPrice$ = this.rows$.pipe(
          map(rows => {
          let result = 0;
          rows.forEach(row => {
            if(row.status && this.selection.isSelected(row)) {
              result = result + row.subtotal_price;
            }
          });
          return result;
        }));
      }
    });


    this.rows$.subscribe(value=>console.log('value1', value));
  }

  public ngOnDestroy(): void {
    this.dataSource.disconnect();
  }

  public isAllSelected(): Observable<boolean> {
    return this.rows$.pipe(map(rows => {
      const numSelected = this.selection.selected.length;
      const numRows = rows.filter(item => item.status !== CartItemStatus.NotAvailable).length;
      return numSelected === numRows;
    }));
  }

  public toggleAllRows(): void {
    this.isAllSelected().subscribe(isAllSelected => {
      if (isAllSelected) {
        this.selection.clear();
        return;
      }

      this.selectAll();
    });

  }

  private selectAll(): void {
    this.rows$.subscribe(rows => {
      this.selection.select(...rows.filter(item => item.status !== CartItemStatus.NotAvailable));
    });
  }
}
