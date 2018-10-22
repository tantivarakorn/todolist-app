import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList = [];

  addTaskToList(newtask){
    this.todoList.push(
      {
        text: newtask
      });
  }

}
 