import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item-component',
  templateUrl: './todo-item-component.component.html',
  styleUrls: ['./todo-item-component.component.scss']
})
export class TodoItemComponentComponent implements OnInit {

  @Input() todoElement!: Todo;

  @ViewChild('todoCheckBox') 
  checkBoxElement!: ElementRef<HTMLSpanElement>;

  CHECKBOX_COLOR_DONE: string = 'rgb(79, 159, 67)';
  CHECKBOX_COLOR_NOT_DONE: string = 'white';
  CHECKBOX_COLOR_DONE_HOVER: string = 'orange';
  CHECKBOX_COLOR_NOT_DONE_HOVER: string = 'skyblue';

  constructor() { }

  ngOnInit(): void {
  }

  checkBoxClicked(){
    this.todoElement.done = !this.todoElement.done;
    this.checkBoxElement.nativeElement.style.backgroundColor = this.todoElement.done ? this.CHECKBOX_COLOR_DONE : this.CHECKBOX_COLOR_NOT_DONE;
  }

  checkBoxMouseEnter(){
    this.checkBoxElement.nativeElement.style.backgroundColor = this.todoElement.done ?  this.CHECKBOX_COLOR_DONE_HOVER: this.CHECKBOX_COLOR_NOT_DONE_HOVER;
  }

  checkBoxMouseLeave(){
    this.checkBoxElement.nativeElement.style.backgroundColor = this.todoElement.done ? this.CHECKBOX_COLOR_DONE : this.CHECKBOX_COLOR_NOT_DONE;
  }
}
