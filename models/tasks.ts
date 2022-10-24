import Task from './task';

interface ITask{
    [uuid: string]: Task,
}


class Tasks {
  private _list: ITask = {};

  get List() {
    return { ...this._list };
  }
  asignTask(desc: string) {
    const task = new Task(desc);
    this._list[task.ID] = task;
  }
}

export default Tasks;