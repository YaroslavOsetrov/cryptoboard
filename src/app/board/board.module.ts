import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

import {RouterModule} from '@angular/router';

import {BoardComponent} from './board.component';

import {LineChartComponent} from './lineChart';

@NgModule({
    declarations: [
        BoardComponent,

        LineChartComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { 
                path: '', component: BoardComponent
            }
        ])
    ]
})
export class BoardModule {

}
