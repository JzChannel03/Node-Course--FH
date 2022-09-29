import "colors";
import inquirer from "inquirer";

const question = [
  {
    type: "list",
    name: "option",
    message: "What do you want to do?",
    choices: [
      {
        name: "Crear tarea",
        value: "1",
      },
      {
        name: "Listar tareas",
        value: "2",
      },
      {
        name: "Listar tareas completadas",
        value: "3",
      },
      {
        name: "Listar tareas pendientes",
        value: "4",
      },
      {
        name: "Completar tarea(s)",
        value: "5",
      },
      {
        name: "Borrar tarea",
        value: "6",
      },
      {
        name: "Salir",
        value: "0",
      },
    ],
  },
];



const inquirerMenu = async () => {
  console.clear();
  console.log("=======================".green);
  console.log("   Select an option:");
  console.log("=======================\n".green);

  const {option}: {option: string} = await inquirer.prompt(question);

  return option;

}

const inquirerPause = async () => {

  const pause = [
    {
      type: "input",
      name: "enter",
      message: `Press ${"ENTER".green} to continue...`,
    },
  ];

  console.log('\n')
  console.clear();

  await inquirer.prompt(pause);
}

export {
  inquirerMenu,
  inquirerPause
}
