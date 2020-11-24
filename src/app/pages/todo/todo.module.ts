import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ModalEdittodoModule } from 'src/app/components/modal-edittodo/modal-edittodo.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    NzButtonModule,
    NzInputModule,
    NzModalModule,
    NzIconModule,
    ModalEdittodoModule,
    NzSpinModule
  ]
})
export class TodoModule { }
