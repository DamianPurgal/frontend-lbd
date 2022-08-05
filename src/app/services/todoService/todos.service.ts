import { Injectable } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private tasks: Todo[] = [];

  constructor() { }

  addTask(task: Todo){
    if(this.isTaskCorrect(task)){
      this.tasks.push(task);
      return true;
    }else{
      return false;
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

  setTaskDoneStatus(taskToEdit: Todo, doneStatus: boolean, doneDate: Date){
    let index = this.tasks.indexOf(taskToEdit);
    if(index !== -1) {
      this.tasks[index].done = doneStatus;
      if(doneStatus){
        this.tasks[index].doneCreated = doneDate;
      }else{
        this.tasks[index].doneCreated = undefined;
      }
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
    if(task.name.length < 5){
      return false;
    }
    return true;
  }
}
