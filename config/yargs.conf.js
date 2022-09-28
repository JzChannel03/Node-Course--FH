const argv = require("yargs")
    .option("b", {
        alias: 'base',
        demandOption: true,
        type: 'number',
        //default: 5,
        describe: 'Base para tabla de multiplicar',
    }).check((argv, options) => {
        if(isNaN(argv.b)) throw 'Base must be a number'
        return true;
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'Booleano para elegir si listar tabla en consola',
        default: false
    })
    .argv;

module.exports = argv;