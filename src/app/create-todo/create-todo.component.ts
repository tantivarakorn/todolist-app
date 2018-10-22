import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
  taskName = '';

  @Output()
  taskAdded = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  addTask(){
       
       this.taskAdded.emit(this.taskName);
       this.taskName = '';
  }

}
 