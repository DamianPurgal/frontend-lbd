import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Todo } from '../todo';
import { TodoEditDoneStatus } from '../todo-edit-done-status';

@Component({
  selector: 'app-todo-item-component',
  templateUrl: './todo-item-component.component.html',
  styleUrls: ['./todo-item-component.component.scss']
})
export class TodoItemComponentComponent implements OnInit {

  @Input() todoTask!: Todo;

  @ViewChild('doneCheckBox') 
  checkBoxElement!: ElementRef<HTMLSpanElement>;

  @Output('deleteTask') 
  deleteTask = new EventEmitter<Todo>();

  @Output('editTaskDoneStatus') 
  editTaskDoneStatus = new EventEmitter<TodoEditDoneStatus>();

  CHECKBOX_COLOR_DONE: string = 'rgb(79, 159, 67)';
  CHECKBOX_COLOR_NOT_DONE: string = 'white';
  CHECKBOX_COLOR_DONE_HOVER: string = 'orange';
  CHECKBOX_COLOR_NOT_DONE_HOVER: string = 'skyblue';

  constructor() { }

  ngOnInit(): void {
  }
  
  emitTaskToDelete(){
    this.deleteTask.emit(this.todoTask);
  }

  checkBoxClicked(){
    this.editTaskDoneStatus.emit({todoElement: this.todoTask, done: !this.todoTask.done, doneCreated: new Date()});

    if(this.todoTask.done){
      this.checkBoxElement.nativeElement.style.backgroundColor = this.CHECKBOX_COLOR_DONE;
    }else{
      this.checkBoxElement.nativeElement.style.backgroundColor = this.CHECKBOX_COLOR_NOT_DONE;
    }
  }

  checkBoxMouseEnter(){
    if(this.todoTask.done){
      this.checkBoxElement.nativeElement.style.backgroundColor = this.CHECKBOX_COLOR_DONE_HOVER;
    }else{
      this.checkBoxElement.nativeElement.style.backgroundColor = this.CHECKBOX_COLOR_NOT_DONE_HOVER;
    }
  }

  checkBoxMouseLeave(){
    if( this.todoTask.done){
      this.checkBoxElement.nativeElement.style.backgroundColor =this.CHECKBOX_COLOR_DONE
    }else{
      this.checkBoxElement.nativeElement.style.backgroundColor =this.CHECKBOX_COLOR_NOT_DONE
    }
  }
}
