const argv = require("yargs")
    .option("b", {
        alias: 'base',
        demandOption: true,
        type: 'number',
        //default: 5,
        describe: 'Base of the multiplication table',
    }).check((argv, options) => {
        if(isNaN(argv.b)) throw 'Base must be a number'
        return true;
    }).option('l', {
        alias: 'list',
        type: 'boolean',
        describe: 'Boolean to choose if you want to list the table in the console',
        default: false
    })
    .option('t', {
        alias: 'to',
        type: 'number',
        describe: 'Number to indicate how far you want the table',
        default: 12
    })
    .argv;

module.exports = argv;