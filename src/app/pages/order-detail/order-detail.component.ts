import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  status:number = 2
  trackcode:string = ""

  constructor() { }

  panels = [
    {
      active: true,
      disabled: false,
      name: 'Detail',
      customStyle: {
        background: '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px'
      }
    }
  ];

  ngOnInit() {
  }


  onStatusChange(){
    console.log(this.status)
  }


  onSave(){
    console.log(this.status)
    if(!this.trackcode.trim()){
      return
    }
    console.log(this.trackcode)
  }



}
