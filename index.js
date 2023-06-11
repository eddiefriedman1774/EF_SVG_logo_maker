// External packages
const inquirer = require('inquirer');
// const fs = require('fs');
// Inquirer prompts for userResponses
const questions = [

    {
        type: 'input',
        message: "Type three characters for the logo,",
        name: 'three_characters'
    },
    {
        type: 'input',
        message: "What will be the color of the text?",
        name: 'text_color'
    },
    {
        type: 'list',
        message: "What will be the shape of the logo.",
        choices:['circle','triangle','square'],
        name: 'shape'
    },
  
    {
        type: 'input',
        message: "What is the color of the shape?",
        name: 'color'
    }
];
async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses!");
    
       
    } catch (error) {
        console.log(error);
    }
};
init();
