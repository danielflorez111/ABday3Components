import { Injectable } from '@angular/core';
import { IItem } from './item.interface';

@Injectable()
export class TodoService {

  private _todoList: IItem[] = [];

  constructor() {
    this._todoList = [{task: "Task 1", done: false}, { task: "Task 2", done: false }];
  }

  get todoList():IItem[] {
    return this._todoList;
  }

  addTask(taskObj:IItem) {
    this._todoList.push(taskObj);
  }

  deleteTask(i: number) {
    this._todoList.splice(i, 1);
  }

}
