import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';



@NgModule({
  declarations: [ //importar componentes
    ListarTarefaComponent, CadastrarTarefaComponent, EditarTarefaComponent
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
