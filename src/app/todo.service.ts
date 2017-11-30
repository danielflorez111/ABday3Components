import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  _todoList = [
    {task:'Task 1', done:false}, 
    {task:'Task 2', done:false} 
  ];

  constructor() { }

  get todoList() {
    return this._todoList;
  }
  
  addTask(taskObj) {
    this._todoList.push(taskObj);
  }
  
  deleteTask(i:number) {
    this._todoList.splice(i, 1);
  }
  
}
