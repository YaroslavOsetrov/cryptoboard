import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {RouterModule} from '@angular/router';

import {BoardComponent} from './board.component';

import {LineChartComponent} from './lineChart';

import {HttpClientModule} from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoinGeckoService } from './../@shared/services/coingecko';

import {CoinGeckoIntercept} from './../@shared/services/coingecko/service.intercept';

@NgModule({
	declarations: [
		BoardComponent,
		LineChartComponent
	],
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule.forChild([
			{ 
				path: '', component: BoardComponent
			}
		]),
	],
	providers: [{
		provide: HTTP_INTERCEPTORS,
		useClass: CoinGeckoIntercept,
		multi: true
	}, CoinGeckoService],
})
export class BoardModule {

}
