import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { PanelModule } from './view/panel/panel.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    PanelModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
