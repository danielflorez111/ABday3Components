import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item;
  @Output() onDelete = new EventEmitter();

  constructor() { }
  
  ngOnInit() {
  }

  deleteTask(){
    this.onDelete.emit();
  }

}
