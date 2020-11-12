import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideBarComponent } from './slide-bar.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';



@NgModule({
  declarations: [SlideBarComponent],
  imports: [
    CommonModule,
    NzMenuModule
  ],
  exports: [
    SlideBarComponent
  ]
})
export class SlideBarModule { }
