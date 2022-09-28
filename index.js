const fs = require("fs");
const colors = require("colors");
const tableGenerator = require("./multTable");
const argv = require("./config/yargs.conf");
//const { argv } = require("process");


console.clear();

try {
    fs.writeFileSync(
        "message.txt",
        new Uint8Array(Buffer.from(tableGenerator(argv.b, argv.l)))
    );
    console.log('Tabla creada! [./message.txt]'.bgGreen)
} catch (error) {
    console.log(`Tabla no ha podido ser creada!
    [${error}]`.bgRed)
} finally{
    console.log('Proceso terminado.'.bgBlue)
}