import "colors";
import { inquirerMenu, inquirerPause } from "./helpers/inquirer";


const main = async () => {
  console.clear();

  let opt = '';

  do {
    opt = await inquirerMenu();
    if(opt !== '0') await inquirerPause();
  } while (opt !== "0");
};

main();
