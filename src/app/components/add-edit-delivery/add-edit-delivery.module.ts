import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditDeliveryComponent } from './add-edit-delivery.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch'
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { FormsModule } from '@angular/forms';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [AddEditDeliveryComponent],
  imports: [
    CommonModule,
    NzAvatarModule,
    NzListModule,
    NzSelectModule,
    NzIconModule,
    NzSwitchModule,
    NzInputModule,
    NzTagModule,
    NzButtonModule,
    NzGridModule,
    NzAlertModule,
    FormsModule,
    NzInputNumberModule,
    NzDividerModule
  ],
  exports: [
    AddEditDeliveryComponent
  ]
})
export class AddEditDeliveryModule { }
