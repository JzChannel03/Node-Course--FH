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
    }).option('t', {
        alias: 'toList',
        type: 'boolean',
        describe: 'Boolean to choose if you want to list the table in the console',
        default: false
    })
    .argv;

module.exports = argv;