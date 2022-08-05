import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Todo } from './interfaces/todo';
import { TodoEditDoneStatus } from './interfaces/todo-edit-done-status';
import { NotificationType } from './notification/type/notification-type';
import { NotificationService } from './services/notificationService/notification.service';
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
export class AppComponent{

  title = 'frontend-lbd';

  @ViewChild('newTaskInput')
  private newTaskInputElement!: ElementRef<HTMLInputElement>;

  constructor(private todoService: TodosService, private notificationService: NotificationService){}

  addTaskToList(){
    let newTask: Todo = {
      name: this.newTaskInputElement.nativeElement.value,
      done: false,
      doneCreated: undefined
    }
    let result = this.todoService.addTask(newTask);
    this.newTaskInputElement.nativeElement.value = "";
    this.newTaskInputElement.nativeElement.focus();
    console.log(this.todoService.getToDoList());

    if(result){
      this.notificationService.addNotification(NotificationType.SUCCESS, "Sukces!", "Dodano zadanie.");
    }else{
      this.notificationService.addNotification(NotificationType.ERROR, "Błąd!", "Niepoprawne zadanie. Długość zadania musi być większa od 5.");
    }
  }

  getToDoList(){
    return this.todoService.getToDoList();
  }

  onDeleteTask(taskToDelete: Todo){
    this.todoService.removeTask(taskToDelete);
    this.notificationService.addNotification(NotificationType.SUCCESS, "Sukces!", "Usunięto zadanie.");
  }

  onEditTaskDoneStatus(taskToEdit: TodoEditDoneStatus){
    this.todoService.setTaskDoneStatus(taskToEdit.todoElement, taskToEdit.done, taskToEdit.doneCreated);
    this.notificationService.addNotification(NotificationType.SUCCESS, "Sukces!", "Zmieniono status zadania.");
  }
}
