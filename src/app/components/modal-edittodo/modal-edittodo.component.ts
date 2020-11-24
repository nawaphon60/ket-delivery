import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal-edittodo',
  templateUrl: './modal-edittodo.component.html',
  styleUrls: ['./modal-edittodo.component.css']
})
export class ModalEdittodoComponent implements OnInit {

  @Input() dataEdit:any

  edittaskname :string =''

  constructor(
    private nzModalRef: NzModalRef
  ) { }

  ngOnInit(): void {
    
    console.log(this.dataEdit)
    this.edittaskname = this.dataEdit.taskname
  }


  save(){

    this.nzModalRef.close({
      id: this.dataEdit.id,
      taskname: this.edittaskname
    })
  }



}
