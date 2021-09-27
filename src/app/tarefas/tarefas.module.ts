import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ //importar componentes
    ListarTarefaComponent
  ],
  imports: [ //importar modulos
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [ //importar serviços
    TarefaService
  ]
})
export class TarefasModule { }
