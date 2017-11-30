import { Component, OnInit } from '@angular/core';
import { TodoService } from './../../todo.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  todoList = [];

  constructor(private _todoService:TodoService) {
    this.todoList = _todoService.todoList;
  }

  ngOnInit() {
  }

}
