import { Component } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AddEditDeliveryComponent } from './components/add-edit-delivery/add-edit-delivery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private nzDrawerService: NzDrawerService
  ){
    this.addDeelivery('normal')
  }

  sw_open = false


  addDeelivery(type:string){
    const drawerRef = this.nzDrawerService.create({
      nzTitle: 'เพิ่มขนส่ง',
      nzFooter: null,
      nzContent: AddEditDeliveryComponent,
      nzContentParams: {
      },
      nzWidth: '80%',
      nzBodyStyle:{
     
      },
      nzWrapClassName: 'TESTT YYYY'
    }).afterClose.subscribe(() => {
      drawerRef.unsubscribe()
      console.log('Drawer(Template) close');
    });
  }
 
}
