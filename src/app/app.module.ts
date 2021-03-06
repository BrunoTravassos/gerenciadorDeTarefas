import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TarefasModule } from './tarefas';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // import do routingmodule
    TarefasModule // import do tarefasmodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
