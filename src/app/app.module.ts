import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SweetTableModule } from 'projects/ngx-sweet-tables/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
