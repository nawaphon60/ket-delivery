import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditDeliveryComponent } from './add-edit-delivery.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';



@NgModule({
  declarations: [AddEditDeliveryComponent],
  imports: [
    CommonModule,
    NzAvatarModule,
    NzListModule,
    NzSelectModule,
    NzIconModule,
    NzSwitchModule
  ],
  exports: [
    AddEditDeliveryComponent
  ]
})
export class AddEditDeliveryModule { }
