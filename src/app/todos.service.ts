import { Injectable, ViewChild } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private tasks: Todo[] = [];

  addTask(task: Todo){
    if(this.isTaskCorrect(task)){
      this.tasks.push(task);
    }else{
      return;
    }
  }

  removeTask(taskToDelete: Todo){
    let index = this.tasks.indexOf(taskToDelete);
    if(index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  getToDoList(){
    return this.tasks;
  }

  setTaskDoneStatus(taskToEdit: Todo, doneStatus: boolean){
    let index = this.tasks.indexOf(taskToEdit);
    if(index !== -1) {
      this.tasks[index].done = doneStatus;
    }
  }

  private isTaskCorrect(task: Todo){
    if(task == undefined){
      return false;
    }
    if(task.name == ""){
      return false;
    }
    if(task.name == undefined){
      return false;
    }
    return true;
  }
  constructor() { }
}
