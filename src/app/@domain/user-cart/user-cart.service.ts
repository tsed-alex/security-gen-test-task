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
        // if (filters.nameSearch) {
        //   data = data.filter((seria) => seria.name.trim().toLowerCase().search(filters.nameSearch.toLowerCase()) >= 0);
        // }
        // if (filters.genre) {
        //   data = data.filter((seria) => seria.genres.join().toLowerCase().search(filters.genre.toLowerCase()) >= 0);
        // }
        // if (filters.year) {
        //   data = data.filter((seria) => seria.premiere.search(filters.year) >= 0);
        // }
        //
        // if (filters.sort === 'desc') {
        //   data = data.reverse();
        // }
        //
        // const initialPos = pageNumber * pageSize;
        // data = data.slice(initialPos, initialPos + pageSize);
        return positions.map(position => new ToUserCartItemModelView().handle(position));
      })
    );
  }

  // public getAmountSerials(filters: ISerialsFilters): Observable<number> {
  //   return this.http.get<ISerials[]>('assets/data/serials.json').pipe(
  //     map((data) => {
  //       if (filters.nameSearch) {
  //         data = data.filter((seria) => seria.name.trim().toLowerCase().search(filters.nameSearch.toLowerCase()) >= 0);
  //       }
  //       if (filters.genre) {
  //         data = data.filter((seria) => seria.genres.join().toLowerCase().search(filters.genre.toLowerCase()) >= 0);
  //       }
  //       if (filters.year) {
  //         data = data.filter((seria) => seria.premiere.search(filters.year) >= 0);
  //       }
  //       return data.length;
  //     })
  //   );
  // }
}
