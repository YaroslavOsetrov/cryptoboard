import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';

import {Currency} from './../../models/currency';

import {CoinGeckoIntercept} from './service.intercept';

@Injectable()
export class CoinGeckoService {

  constructor(private http: HttpClient) {       }

  getCurrency(code:string):Observable<Currency> {
    return this.http.get<Currency>('/coins/'+code, {
			params:{
				symbol:code
			}
    });
  }

	getTopCurrencies(count:any, vs_currency:string):Observable<Array<Currency>> {
    return this.http.get<Array<Currency>>('/coins/markets', {
			params:{
				order:'market_cap_desc',
				per_page:count,
				vs_currency:vs_currency
			}
    });
  }


	getCurrencyHistory(code:string, date:string):Observable<Currency>{
		return this.http.get<Currency>('/coins/'+code.toLowerCase()+'/history', {
				params:{
					date:date
				}
		})
  }

}