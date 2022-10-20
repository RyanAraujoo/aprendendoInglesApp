import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './view/topo/topo.component';
import { PainelComponent } from './view/painel/painel.component';
import { TentativasComponent } from './view/tentativas/tentativas.component';
import { ProgressoComponent } from './view/progresso/progresso.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent,
    TentativasComponent,
    ProgressoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
