import "colors";
import { inquirerMenu, inquirerPause, readInputWithTextToShow } from "./helpers/inquirer";
import Task from "./models/task";
import Tasks from './models/tasks';


const main = async () => {
  console.clear();
  const tasks =  new Tasks();

  let opt = '';

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        tasks.asignTask(
          await readInputWithTextToShow("Descripción de la tarea: ")
        );
        break;

      case "2":
        console.log(tasks.List);
        break;
    }

    if(opt !== '0') await inquirerPause();
  } while (opt !== "0");
};


main();
