const colors = require("colors");

const tableGenerator = (base, toList) => {
    let table, console = "";
    for (let index = 1; index <= 12; index++) {
        table += `${base} * ${index} = ${index * base}\n`;
        console += `${colors.blue(base)} * ${colors.cyan(index)} = ${colors.green(index * base)}\n`
    }
    if(toList) console.log(console)
    return table;
}

module.exports = tableGenerator;