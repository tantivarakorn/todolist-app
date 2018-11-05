import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
@Input()
todo : any ;

@Output()
deleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  markAsDone(){
    this.todo.is_done = !this.todo.is_done;
  }

  deleteTodo(){
    this.deleted.emit(this.todo.id);
  }

} 
