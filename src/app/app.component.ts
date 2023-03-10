import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { Guid } from "guid-typescript";
import { NgForm } from '@angular/forms';
import { GlobalConfig, isEmpty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // creating a todo array
  todos: Todo[] = [
    new Todo(Guid.create(), 'TypeScript', false),
    new Todo(Guid.create(), 'Angular', false)
  ]

  onsubmit(form: NgForm) {
    if (form.value.todoTitle.length != 0) {
      let todo = new Todo(Guid.create(), form.value.todoTitle, false);
      this.todos.push(todo);
      form.resetForm();
    }

  }

  onComplete(id: Guid) {
    let todo = this.todos.filter(x => x.id == id)[0];
    todo.isComplete = !todo.isComplete
  }


  onDelete(id: Guid) {
    let todo = this.todos.filter(x => x.id == id)[0];  //id of todo to be deleted
    let index = this.todos.indexOf(todo, 0); // getting the the index of the todo to be deleted (ie, index of the above todo)
    if (index > -1) {
      this.todos.splice(index, 1);
    }

  }
}


