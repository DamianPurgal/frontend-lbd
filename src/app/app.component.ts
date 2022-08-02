import { Component, ElementRef, ViewChild } from '@angular/core';
import { Todo } from './todo';
import { TodoEditDoneStatus } from './todo-edit-done-status';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-lbd';

  @ViewChild('newTaskInput') 
  newTaskInputElement!: ElementRef<HTMLInputElement>;
  
  addElementToList(){
    let newElement: Todo = {
      name: this.newTaskInputElement.nativeElement.value,
      done: false
    }
    this.todoService.addToDoElement(newElement);
    this.newTaskInputElement.nativeElement.value = "";
    this.newTaskInputElement.nativeElement.focus();
    console.log(this.todoService.getToDoList());
  }

  getListOfElements(){
    return this.todoService.getToDoList();
  }

  onDeleteTask(taskToDelete: Todo){
    this.todoService.removeToDoElement(taskToDelete);
  }

  onEditTaskDoneStatus(elementToEdit: TodoEditDoneStatus){
    this.todoService.setTodoElementDoneStatus(elementToEdit.todoElement, elementToEdit.done);
  }

  constructor(private todoService: TodosService){}
}
