import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderDetailRoutingModule } from './order-detail-routing.module';
import { OrderDetailComponent } from './order-detail.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { SubnameModule } from 'src/app/pipe/subname/subname.module';

@NgModule({
  declarations: [OrderDetailComponent],
  imports: [
    CommonModule,
    OrderDetailRoutingModule,
    NzSelectModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    FormsModule,
    NzCollapseModule,
    SubnameModule
  ]
})
export class OrderDetailModule { }