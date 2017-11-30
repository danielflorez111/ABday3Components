import { Injectable } from '@angular/core';
import { IItem } from './item.interface';

@Injectable()
export class TodoService {

  private _todoList: IItem[] = [];

  constructor() {
    this._todoList = [{task: "Go to the gym", done: false}, { task: "Do the homework", done: false }];
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
