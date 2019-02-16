import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpHeaders, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { CoinMarketCapService } from './index';
import { Observable } from 'rxjs';

const API = {
  KEY:"5aaa7fe5-1885-420f-a63b-4dff02be5ea8",
  ENDPOINT:"https://api.coingecko.com/api/v3"
};



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  

  api_config = API;
  
  constructor(coinmarketcapService: CoinMarketCapService) {}
  


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      url: `${this.api_config.ENDPOINT}/${request.url}`,
    });
    
    return next.handle(request);
  }
}