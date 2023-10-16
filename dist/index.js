import * as inquirer from "inquirer";
import chalk from "chalk";
//calculator operators
var Operator;
(function (Operator) {
    Operator["ADD"] = "Addition";
    Operator["SUB"] = "Subtraction";
    Operator["MUL"] = "Multiplication";
    Operator["DIV"] = "Division";
})(Operator || (Operator = {}));
const prompt = inquirer.createPromptModule();
function validateNumber(input) {
    if (isNaN(parseFloat(input))) {
        return 'Please enter a valid number';
    }
    return true;
}
async function main() {
    const input = await prompt([
        {
            type: "input",
            name: "num1",
            message: "Please enter 1st number:",
            validate: validateNumber,
        },
        {
            type: "list",
            name: "operator",
            message: "select an operation:",
            choices: Object.values(Operator),
        },
        {
            type: "input",
            name: "num2",
            message: "Please enter 2nd number:",
            validate: validateNumber,
        },
    ]);
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    const selectedOperator = input.operator;
    let result;
    if (selectedOperator === Operator.ADD) {
        result = num1 + num2;
        console.log(chalk.red.bgBlack(`Result is: ${result}`));
    }
    else if (selectedOperator === Operator.SUB) {
        result = num1 - num2;
        console.log(chalk.red.bgBlack(`Result is: ${result}`));
    }
    else if (selectedOperator === Operator.MUL) {
        result = num1 * num2;
        console.log(chalk.red.bgBlack(`Result is: ${result}`));
    }
    else if (selectedOperator === Operator.DIV) {
        result = num1 / num2;
        console.log(chalk.red.bgBlack(`Result is: ${result}`));
    }
}
main();
