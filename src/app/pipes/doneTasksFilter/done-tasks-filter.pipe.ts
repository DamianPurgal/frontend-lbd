import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';


@Pipe({
  name: 'doneTasksFilter',
  pure: false
})
export class DoneTasksFilterPipe implements PipeTransform {

  transform(tasks: Todo[], done: boolean): Todo[] {
    return tasks.filter(task => task.done == done);
  }

}
