const fs = require("fs");
const colors = require("colors");
const tableGenerator = require("./multTable");
const argv = require("./config/yargs.conf");
//const { argv } = require("process");


console.clear();

try {
    fs.writeFileSync(
        `./out/table-of-${argv.b}.txt`,
        new Uint8Array(Buffer.from(tableGenerator(argv.b, argv.l, argv.t)))
    );
    console.log(`Table created! [./out/table-of-${argv.b}.txt]`.bgGreen)
} catch (error) {
    console.log(`The table hasn't been created!
    [${error}]`.bgRed)
} finally{
    console.log('Finished process.'.bgBlue)
}