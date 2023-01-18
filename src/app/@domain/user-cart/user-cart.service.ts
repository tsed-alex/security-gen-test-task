import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {UserCartSettingModel} from "./user-cart.setting-model";
import {ToUserCartItemModelView} from "./to-user-cart-item.model-view";
import {UserCartItemModelView} from "./user-cart-item.model-view";

@Injectable()
export class UserCartService {

  constructor(private http: HttpClient) { }

  public getUserCartItems(filters?: any, pageNumber?: number, pageSize?: number): Observable<UserCartItemModelView[]> {
    return this.http.get<UserCartSettingModel[]>('assets/data/cart.json').pipe(
      map((positions) => {

        return positions.map(position => new ToUserCartItemModelView().handle(position));
      })
    );
  }
}
