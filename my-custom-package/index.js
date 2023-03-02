const upperCase = require("upper-case").upperCase;

function greet(name)
{
    console.log(upperCase(`Hello ${name} Welcome to World!`));
}
greet("Anas");

module.exports = greet;