import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalEdittodoComponent } from './modal-edittodo.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';




@NgModule({
  declarations: [ModalEdittodoComponent],
  imports: [
    CommonModule,
    NzModalModule,
    NzInputModule,
    FormsModule,
    NzButtonModule
  ],
  exports:[ModalEdittodoComponent]
})
export class ModalEdittodoModule { }
