const colors = require("colors");

const tableGenerator = (base, list, to) => {
    let table = "";
    let consoleTable = "";
    for (let index = 1; index <= to; index++) {
        table += `${base} * ${index} = ${index * base}\n`;
        consoleTable += `${colors.blue(base)} * ${colors.cyan(index)} = ${colors.green(index * base)}\n`;
    }
    if(list) console.log(consoleTable)
    return table;
}

module.exports = tableGenerator;