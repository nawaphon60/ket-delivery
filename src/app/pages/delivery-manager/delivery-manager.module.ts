import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryManagerRoutingModule } from './delivery-manager-routing.module';
import { DeliveryManagerComponent } from './delivery-manager.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { AddEditDeliveryModule } from 'src/app/components/add-edit-delivery/add-edit-delivery.module';
import { SlideBarModule } from 'src/app/components/slide-bar/slide-bar.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DeliveryManagerComponent],
  imports: [
    CommonModule,
    DeliveryManagerRoutingModule,
    NzLayoutModule,
    NzButtonModule,
    NzGridModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzSwitchModule,
    NzDropDownModule,
    NzIconModule,
    NzSelectModule,
    SlideBarModule,
    NzDrawerModule,
    AddEditDeliveryModule,
    FormsModule
  ]
})
export class DeliveryManagerModule { }
