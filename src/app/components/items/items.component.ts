import { Component, OnInit } from '@angular/core';
import { TodoService } from './../../todo.service';
import { IItem } from './../../item.interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  todoList:IItem[] = [];
  task:string;
  status:string = "all";
  _itemsLeft:number;

  constructor(private _todoService:TodoService) {
    this.todoList = _todoService.todoList;
  }

  ngOnInit() {
  }
  
  get itemsLeft(): number {
    return this.todoList.filter( item => item.done === false).length;
  }
  
  addTask() {
    if(this.task.trim() !== "") {
      let id:number = this.getRandomInt(1000, 9999);
      let taskObj:IItem = { id: id, task: this.task,  done: false };
      this._todoService.addTask(taskObj);
      this.task = "";
      this.setAll();
    }
  }

  deleteTask(id:number) {
    this._todoService.deleteTask(id);
    this.setAll();
  }

  setAll() {
    this.status = "all";
  }

  setActive() {
    this.status = "active";
  }

  setCompleted() { 
    this.status = "completed";
  }
  
  getRandomInt(min:number, max:number):number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
