import { Component, ElementRef, ViewChild } from '@angular/core';
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
    this.todoService.addToDoElement(this.newTaskInputElement.nativeElement.value);
    this.newTaskInputElement.nativeElement.value = "";
    this.newTaskInputElement.nativeElement.focus();
  }

  constructor(private todoService: TodosService){}
}
