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

  removeToDoElement(elementToDelete: Todo){
    let index = this.toDos.indexOf(elementToDelete);
    if(index !== -1) {
      this.toDos.splice(index, 1);
    }
  }

  getToDoList(){
    return this.toDos;
  }

  setTodoElementDoneStatus(elementToEdit: Todo, doneStatus: boolean){
    let index = this.toDos.indexOf(elementToEdit);
    if(index !== -1) {
      this.toDos[index].done = doneStatus;
    }
  }

  private isElementCorrect(element: Todo){
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
