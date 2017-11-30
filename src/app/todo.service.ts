import { Injectable } from '@angular/core';
import { IItem } from './item.interface';

@Injectable()
export class TodoService {

  _todoList: IItem[] = [];

  constructor() {
    this._todoList = [{id: 0, task: "Go to the gym", done: false}, {id: 1, task: "Do the homework", done: false }];
  }

  get todoList():IItem[] {
    return this._todoList;
  }

  addTask(taskObj:IItem) {
    this._todoList.push(taskObj);
  }

  deleteTask(id: number) {
    let index = this._todoList.map( item => item.id ).indexOf(id);
    this._todoList.splice(index,1);
  }

}