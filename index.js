const fs = require("fs");
const colors = require("colors");
const tableGenerator = require("./multTable");
const argv = require("./config/yargs.conf");
//const { argv } = require("process");


console.clear();

try {
    fs.writeFileSync(
        "message.txt",
        new Uint8Array(Buffer.from(tableGenerator(argv.b, argv.t)))
    );
    console.log('Table created! [./message.txt]'.bgGreen)
} catch (error) {
    console.log(`The table hasn't been created!
    [${error}]`.bgRed)
} finally{
    console.log('Finished process.'.bgBlue)
}