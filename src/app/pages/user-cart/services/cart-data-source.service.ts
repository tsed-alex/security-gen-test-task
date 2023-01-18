import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import {Observable, ReplaySubject} from 'rxjs';
import {UserCartService} from "../../../@domain/user-cart/user-cart.service";
import {UserCartItemModelView} from "../../../@domain/user-cart/user-cart-item.model-view";
import {Injectable} from "@angular/core";

@Injectable()
export class CartDataSourceService implements DataSource<UserCartItemModelView> {

  private cartItemsSubject = new ReplaySubject<UserCartItemModelView[]>(1);

  constructor(private userCartService: UserCartService) {  }

  public loadData(filters?: any, pageIndex: number = 0, pageSize: number = 5) {
    this.userCartService.getUserCartItems(filters, pageIndex, pageSize)
      .subscribe((data) => this.cartItemsSubject.next(data));
  }

  public connect(collectionViewer?: CollectionViewer): Observable<UserCartItemModelView[]> {
    return this.cartItemsSubject.asObservable();
  }

  public disconnect(collectionViewer?: CollectionViewer): void {
    this.cartItemsSubject.complete();
  }

}
