import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { TodoItemComponentComponent } from './todo-item-component/todo-item-component.component';
import {MatIconModule} from '@angular/material/icon';
import { TodoTooltipDirective } from './directives/todoTooltip/todo-tooltip.directive';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DoneTasksFilterPipe } from './pipes/doneTasksFilter/done-tasks-filter.pipe';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponentComponent,
    DoneTasksFilterPipe,
    TodoTooltipDirective,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
