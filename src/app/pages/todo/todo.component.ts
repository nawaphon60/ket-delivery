import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ModalEdittodoComponent } from 'src/app/components/modal-edittodo/modal-edittodo.component';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: any[] = []
  taskname: string = ""
  isLoading = false
  isVisible = false;
  isOkLoading = false;

  constructor(
    private todoService: TodoService,
    private modalService: NzModalService
  ) { }

  ngOnInit(): void {

    this.getAllTodo()

  }

  getAllTodo(){
    this.todoService.getAll().then((res:any)=>{
      this.todo = res
  
      }).catch((err:any)=>{
  
  
      })
  }


  create(){
    let model = {
      "taskname": this.taskname,
      "completed": false
    }
    console.log(model)
    this.isLoading = true

    this.todoService.create(model).then((res:any)=>{

      this.taskname = ""
      this.getAllTodo()
      this.isLoading = false

    }).catch((err:any)=>{
      this.isLoading = false
    })

  }

  deleteData(id: any) {
    this.isLoading = true

    this.todoService.deleteById(id).then((res:any) =>{
      console.log(res)
      this.getAllTodo()
      this.isLoading = false
    })
   
  }

  completedwork(id:number, completed: boolean) {
    let model = {
      completed: completed?false:true
    }

    this.todoService.update(model, id).then((res:any) =>{
      this.getAllTodo()
    })
  }

  showModal(obj:any) {

    // this.isVisible = true;
    let m = this.modalService.create({
      nzTitle: `Edit ${obj.taskname}`,
      nzContent: ModalEdittodoComponent,
      nzFooter: null,
      nzComponentParams: {dataEdit:obj}
    }).afterClose.subscribe((res:any)=>{

      if(res){

        let model = {
          taskname: res.taskname
        }
        this.isLoading = true
        this.todoService.update(model, res.id)
        .then((success) =>{
          this.getAllTodo()
          this.isLoading = false
        }) 
        .catch((err:any)=>{
           
        })

      }

    }) 

  }
 
  
}