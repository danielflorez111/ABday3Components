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
  status:string;
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
      let taskObj = { task: this.task,  done: false };
      this._todoService.addTask(taskObj);
      this.task = "";
    }
  }

  deleteTask(i:number) {
    this._todoService.deleteTask(i);
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

}
