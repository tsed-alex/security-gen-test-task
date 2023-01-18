import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyService} from "../services/currency.service";
import {concat, Observable, of, switchMap} from "rxjs";
import {CurrencySymbols} from "../../../@domain/user-cart/types";

@Pipe({
  name: 'userCurrency'
})
export class UserCurrencyPipe implements PipeTransform {

  constructor(private currencyService: CurrencyService) {  }

  transform(value: number | null, ...args: unknown[]): Observable<string> {
    if(value === null) {
      return of('undefined')
    }

    return concat(of(void 0), this.currencyService.currencyChanged$).pipe(
      switchMap(() => this.currencyService.currency$),
      switchMap((currencyData: { [key: string]: number }) => {
        const coff = currencyData[this.currencyService.currencyValue];
        const calculateValue = (coff * value).toFixed(2);
        return of(this.normalizeValueString(calculateValue))
      })
    );
  }

  private normalizeValueString(value: string): string {
    return `${CurrencySymbols[this.currencyService.currencyValue]} ${value}`
  }
}
