import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubnamePipe } from './subname.pipe';



@NgModule({
  declarations: [
    SubnamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SubnamePipe
  ]
})
export class SubnameModule { }
