import { Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  toDos: string[] = [];

  addToDoElement(element: string){
    if(element == "" || element == undefined){
      return;
    }else{
      this.toDos.push(element);
      console.log(element);
    }
  }
  constructor() { }
}
