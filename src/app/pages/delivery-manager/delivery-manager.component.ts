import { Component, OnInit } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AddEditDeliveryComponent } from 'src/app/components/add-edit-delivery/add-edit-delivery.component';

@Component({
  selector: 'app-delivery-manager',
  templateUrl: './delivery-manager.component.html',
  styleUrls: ['./delivery-manager.component.css']
})
export class DeliveryManagerComponent implements OnInit {

  constructor(
    private nzDrawerService: NzDrawerService
  ){
    // this.addDeelivery('normal')
  }

  ngOnInit(): void {
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
