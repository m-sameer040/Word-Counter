#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Displays a colorful message
console.log(chalk.bold.cyanBright("\n \t\t Code with Sameer . Word Counter"));
console.log("=".repeat(65));

//prompt the user to enter a message
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Please Enter a Sentence"
    },
]);

// Triming the sentence and spliting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");

// Analysis of user input sentence 
console.log("=".repeat(65));
console.log(chalk.bold("- Sentence words:"));
console.log(words);
console.log(chalk.bold(`\n Word Count: ${chalk.bold.cyanBright(words.length)}`));
console.log("=".repeat(65));