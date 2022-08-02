import { DoneTasksFilterPipe } from './done-tasks-filter.pipe';

describe('DoneTasksFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new DoneTasksFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
