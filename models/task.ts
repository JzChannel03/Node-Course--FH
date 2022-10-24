import { v4 as uuidv4 } from "uuid";

class Task {
  public desc: string;
  public dateOfComplete: string;
  private id: string;

  constructor(desc: string) {
    this.desc = desc;
    this.dateOfComplete = "";
    this.id = uuidv4();
  }

  get ID() {
    return this.id;
  }
}

export default Task;
