//Arquivo de Rotas
import { NgModule } from "@angular/core";
import {Routes, RouterModule } from "@angular/router";

export const router: Routes = [];

@NgModule({
  imports: [ RouterModule.forRoot(router)],//tratamento de rotas
  exports: [RouterModule] //
})

//modulo de rotas
export class AppRoutingModule{}
