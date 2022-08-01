import { Injectable, ViewChild } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private toDos: Todo[] = [];

  addToDoElement(element: Todo){
    if(this.isElementCorrect(element)){
      this.toDos.push(element);
    }else{
      return;
    }
  }

  getToDoList(){
    return this.toDos;
  }

  isElementCorrect(element: Todo){
    if(element == undefined){
      return false;
    }
    if(element.name == ""){
      return false;
    }
    if(element.name == undefined){
      return false;
    }
    return true;
  }
  constructor() { }
}
