//Arquivo de Rotas
import { NgModule } from "@angular/core";
import {Routes, RouterModule } from "@angular/router";
import { TarefaRoutes } from "./tarefas";

export const router: Routes = [
  {
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'
  },
  ...TarefaRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(router)],//tratamento de rotas
  exports: [
    RouterModule
  ]
})

//modulo de rotas
export class AppRoutingModule{}
