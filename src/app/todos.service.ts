import { Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private toDos: string[] = [];

  addToDoElement(element: string){
    if(element == "" || element == undefined){
      return;
    }else{
      this.toDos.push(element);
    }
  }

  getToDoList(){
    return this.toDos;
  }

  constructor() { }
}
