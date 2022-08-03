import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Todo } from './interfaces/todo';
import { TodoEditDoneStatus } from './interfaces/todo-edit-done-status';
import { NotificationComponent } from './notification/notification.component';
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

  @ViewChild('notificationContainer', {read: ViewContainerRef, static:true})
  private notificationContainer!: ViewContainerRef;

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
      this.addNotification(true, "Sukces!", "Dodano zadanie.");
    }else{
      this.addNotification(false, "Błąd!", "Niepoprawne zadanie. Długość zadania musi być większa od 5.");
    }

  }

  getToDoList(){
    return this.todoService.getToDoList();
  }

  onDeleteTask(taskToDelete: Todo){
    this.todoService.removeTask(taskToDelete);
    this.addNotification(true, "Sukces!", "Usunięto zadanie.");
  }

  onEditTaskDoneStatus(taskToEdit: TodoEditDoneStatus){
    this.todoService.setTaskDoneStatus(taskToEdit.todoElement, taskToEdit.done, taskToEdit.doneCreated);
    this.addNotification(true, "Sukces!", "Zmieniono status zadania.");
  }

  addNotification(success: boolean, header: string, message: string){
    const notificationRef = this.notificationContainer.createComponent(
      NotificationComponent
    );
    notificationRef.instance.header = header;
    notificationRef.instance.message = message;
    notificationRef.instance.success = success;
  }

  constructor(private todoService: TodosService){}
}
