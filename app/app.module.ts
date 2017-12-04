import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@ngModule({
  imports: [
    BrowserModule
  ],
  declaration: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}