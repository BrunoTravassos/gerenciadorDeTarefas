import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';



@NgModule({
  declarations: [ //importar componentes
    ListarTarefaComponent
  ],
  imports: [ //importar modulos
    CommonModule
  ],
  providers: [ //importar serviços
    TarefaService
  ]
})
export class TarefasModule { }
