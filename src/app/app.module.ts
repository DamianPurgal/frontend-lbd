import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatListModule} from '@angular/material/list';
import { TodoItemComponentComponent } from './todo-item-component/todo-item-component.component';
import {MatIconModule} from '@angular/material/icon';
import { DoneTasksFilterPipe } from './done-tasks-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponentComponent,
    DoneTasksFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
