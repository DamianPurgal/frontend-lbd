import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item-component',
  templateUrl: './todo-item-component.component.html',
  styleUrls: ['./todo-item-component.component.scss']
})
export class TodoItemComponentComponent implements OnInit {

  @Input() todoElement!: Todo;

  constructor() { }

  ngOnInit(): void {
  }

}
