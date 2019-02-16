import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './CoinMarketCap/auth.interceptor';

import {CoinMarketCapService} from './CoinMarketCap/index';
import { BoardComponent } from './board/board.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo:'board', pathMatch:'full'},
      { path: 'board', loadChildren: './board/board.module#BoardModule'}
    ])
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, CoinMarketCapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
