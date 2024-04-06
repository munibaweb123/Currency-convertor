import inquirer from "inquirer";
const currency = {
    USD: 1,
    AUD: 1.52,
    EUR: 0.91,
    GBP: 0.79,
    INR: 83.28,
    SAR: 3.75,
    AED: 3.67,
    CAD: 1.36,
    CNY: 7.23,
    TRY: 32,
    IRR: 42,
    PKR: 280
};
let answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter from currency to convert? ",
        choices: ['USD', 'AUD', 'EUR', 'GBP', 'INR', 'SAR', 'AED', 'CAD', 'CNY', 'TRY', 'IRR', 'PKR']
    },
    {
        name: "to",
        type: "list",
        message: "Enter to currency to convert? ",
        choices: ['USD', 'AUD', 'EUR', 'GBP', 'INR', 'SAR', 'AED', 'CAD', 'CNY', 'TRY', 'IRR', 'PKR']
    },
    {
        name: "amount",
        type: "number",
        message: "enter amount?"
    }
]);
let fromAmount = currency[answer.from]; // user from amount i.e:USR,PKR etc
let toAmount = currency[answer.to]; // user input to amount
let amount = answer.amount; // how much currency amount user want to convert!
let baseAmount = amount / fromAmount; // USD base currency
let convertedAmount = baseAmount * toAmount; // result after conversion of currency
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
console.log(Math.round(convertedAmount * 100) / 100);
