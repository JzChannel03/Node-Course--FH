const colors = require("colors");

const tableGenerator = (base, toList) => {
    table = "";
    for (let index = 1; index <= 12; index++) {
        table += `${colors.blue(base)} * ${colors.cyan(index)} = ${colors.green(index*base)}\n`
    }
    if(toList) console.log(table)
    return table;
}

module.exports = tableGenerator;