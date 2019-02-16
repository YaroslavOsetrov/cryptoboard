import { Component, OnInit } from '@angular/core';

import {CoinMarketCapService, Currency} from './../CoinMarketCap/index';

import {Observable, forkJoin} from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less']
})
export class BoardComponent implements OnInit {
  title = 'CryptoBoard';


  currencies:Array<Currency> = [];

  currenciesHistory = {};

  constructor(private _coinService:CoinMarketCapService){
    
  }

  ngOnInit(){

    this._coinService.getTopCurrencies(6, 'usd').subscribe(
      response => {
        this.currencies = response;
        
        console.log(response);

        this.currencies.forEach(currency => {
          this._getLastWeekHistory(currency.id);
        });
      }
    )

  }

  private _getLastWeekHistory(currency:string):void{
    
    
    let today = new Date();
    let weekAgo = new Date();
    weekAgo.setDate(today.getDate() - 7);


    let daysArray = [];

    while (weekAgo <= today) {
      daysArray.push(new Date(weekAgo).getDate() + '-' + (new Date(weekAgo).getMonth()+1) + '-' + new Date(weekAgo).getFullYear());
      weekAgo.setDate(new Date(weekAgo).getDate() + 1);
    }

    let queries = [];
    daysArray.forEach((date) => {
      queries.push(this._coinService.getCurrencyHistory(currency, date));
    });

    forkJoin(queries).subscribe(
      response => {
        response.forEach((row, dayIndex) => {
          if (!this.currenciesHistory.hasOwnProperty(currency))
            this.currenciesHistory[currency] = [];

            this.currenciesHistory[currency].push((row.market_data) ? row.market_data.current_price.usd : response[dayIndex - 1].market_data.current_price.usd);

        })
      }
    )/*
      this._coinService.getCurrencyHistory(currency, date).subscribe(
        response => {
          
          if (!this.currenciesHistory.hasOwnProperty(currency))
            this.currenciesHistory[currency] = {};
        
            this.currenciesHistory[currency][date] = (response.market_data) ? response.market_data.current_price.usd : 0;
        }
      )*/
    

  }

}
