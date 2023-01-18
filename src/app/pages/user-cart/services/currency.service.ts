import { Injectable } from '@angular/core';
import {CurrencyValueTypes} from "../../../@domain/user-cart/types";
import {ReplaySubject, Subject} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, shareReplay} from "rxjs/operators";

@Injectable()
export class CurrencyService {

  private _currencyValue: CurrencyValueTypes = CurrencyValueTypes.USD;
  public get currencyValue(): CurrencyValueTypes  {
    return this._currencyValue;
  }
  public set currencyValue(value: CurrencyValueTypes) {
    this._currencyValue = value;

    this.currencyChanged$.next(void 0);
  }

  public currencyChanged$ = new ReplaySubject(1);
  private currencySubject$ = new Subject();
  public currency$ = this.currencySubject$.asObservable().pipe(
    // @ts-ignore
    shareReplay(1),
    map(({rates}) => rates)
  );

  constructor(private http: HttpClient) {
    this.loadCurrencies();
  }

  private loadCurrencies(): void {
    const params = new HttpParams({ fromObject: {
        base: 'USD',
        symbols: 'USD,RUB,GBP,EUR,CNY'
    } });

    this.http.request("GET",'https://api.exchangerate.host/latest', { params })
      .subscribe(data => this.currencySubject$.next(data));
  }


}
