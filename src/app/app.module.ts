import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo:'board', pathMatch:'full'},
      { path: 'board', loadChildren: './board/board.module#BoardModule'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
