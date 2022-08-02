import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
  name: 'doneTasksFilter',
  pure: false
})
export class DoneTasksFilterPipe implements PipeTransform {

  transform(tasks: Todo[]): Todo[] {
    return tasks.sort(function(a, b) {
      return Number(a.done) - Number(b.done);
   });
  }

}
