import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/items/item/item.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
