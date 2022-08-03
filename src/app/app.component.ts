import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Todo } from './interfaces/todo';
import { TodoEditDoneStatus } from './interfaces/todo-edit-done-status';
import { NotificationComponent } from './notification/notification.component';
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
export class AppComponent implements OnInit{
  title = 'frontend-lbd';

  @ViewChild('newTaskInput')
  newTaskInputElement!: ElementRef<HTMLInputElement>;

  @ViewChild('notificationContainer', {read: ViewContainerRef, static:true})
  private notificationContainer!: ViewContainerRef;

  ngOnInit(): void {
    this.notificationService.setContainer(this.notificationContainer);
  }

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
      this.notificationService.addNotification(true, "Sukces!", "Dodano zadanie.");
    }else{
      this.notificationService.addNotification(false, "Błąd!", "Niepoprawne zadanie. Długość zadania musi być większa od 5.");
    }
  }

  getToDoList(){
    return this.todoService.getToDoList();
  }

  onDeleteTask(taskToDelete: Todo){
    this.todoService.removeTask(taskToDelete);
    this.notificationService.addNotification(true, "Sukces!", "Usunięto zadanie.");
  }

  onEditTaskDoneStatus(taskToEdit: TodoEditDoneStatus){
    this.todoService.setTaskDoneStatus(taskToEdit.todoElement, taskToEdit.done, taskToEdit.doneCreated);
    this.notificationService.addNotification(true, "Sukces!", "Zmieniono status zadania.");
  }

  constructor(private todoService: TodosService, private notificationService: NotificationService){}
}
