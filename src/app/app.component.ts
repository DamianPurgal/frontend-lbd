import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Todo } from './interfaces/todo';
import { TodoEditDoneStatus } from './interfaces/todo-edit-done-status';
import { TodosService } from './services/todoService/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(5%)', opacity: 0}),
          animate('120ms', style({transform: 'translateX(0)', opacity: 1}))
        ])
      ]
    )
  ]
})
export class AppComponent {
  title = 'frontend-lbd';

  @ViewChild('newTaskInput')
  newTaskInputElement!: ElementRef<HTMLInputElement>;

  addTaskToList(){
    let newTask: Todo = {
      name: this.newTaskInputElement.nativeElement.value,
      done: false,
      doneCreated: undefined
    }
    this.todoService.addTask(newTask);
    this.newTaskInputElement.nativeElement.value = "";
    this.newTaskInputElement.nativeElement.focus();
    console.log(this.todoService.getToDoList());
  }

  getToDoList(){
    return this.todoService.getToDoList();
  }

  onDeleteTask(taskToDelete: Todo){
    this.todoService.removeTask(taskToDelete);
  }

  onEditTaskDoneStatus(taskToEdit: TodoEditDoneStatus){
    this.todoService.setTaskDoneStatus(taskToEdit.todoElement, taskToEdit.done, taskToEdit.doneCreated);
  }

  constructor(private todoService: TodosService){}
}
