import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import {BehaviorSubject, Observable, ReplaySubject} from 'rxjs';
import {UserCartService} from "../../../@domain/user-cart/user-cart.service";
import {UserCartItemModelView} from "../../../@domain/user-cart/user-cart-item.model-view";
import {Injectable} from "@angular/core";

@Injectable()
export class CartDataSourceService implements DataSource<UserCartItemModelView> {
  // public maxLength: number;

  private cartItemsSubject = new ReplaySubject<UserCartItemModelView[]>(1);

  constructor(private userCartService: UserCartService) {
    console.log('CartDataSourceService!');
  }

  public loadData(filters?: any, pageIndex: number = 0, pageSize: number = 5) {
    this.userCartService.getUserCartItems(filters, pageIndex, pageSize)
      .subscribe((data) => this.cartItemsSubject.next(data));

    // this._serialTableService.getAmountSerials(filters).subscribe((amount) => this.maxLength = amount);
  }

  public connect(collectionViewer?: CollectionViewer): Observable<UserCartItemModelView[]> {
    return this.cartItemsSubject.asObservable();
  }

  public disconnect(collectionViewer?: CollectionViewer): void {
    this.cartItemsSubject.complete();
  }

}
