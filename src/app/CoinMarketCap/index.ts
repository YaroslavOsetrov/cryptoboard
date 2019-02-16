import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';



export interface Currency{
  id:string;
  symbol:string;
  name:string;
	current_price?:number;
	price_change_percentage_24h?:number;
  market_data:{
    current_price:{
      usd:number;
    }
  }
}

@Injectable()
export class CoinMarketCapService {

  constructor(private http: HttpClient) {       
  }

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