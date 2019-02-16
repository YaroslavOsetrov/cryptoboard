import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpHeaders, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { CoinGeckoService } from './index';
import { Observable } from 'rxjs';

export const API_ENDPOINT = "https://api.coingecko.com/api/v3";


@Injectable()
export class CoinGeckoIntercept implements HttpInterceptor {
  

  api_endpoint = API_ENDPOINT;
  
  constructor(private _coinGeckoService: CoinGeckoService) {}
  


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      url: `${this.api_endpoint}/${request.url}`,
    });
    
    return next.handle(request);
  }
}