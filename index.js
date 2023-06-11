// External packages
const inquirer = require('inquirer');
const fs = require('fs');


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

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your svg file has been generated")
    });
}

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

function generateSVG (characters, textColor, shapeType, shapeColor) {
    svg = `<?xml version="1.0" standalone="no"?>`+"\n"
    svg += `<svg width="300" height="200" version="1.1"`
    svg += ` xmlns="http://www.w3.org/2000/svg">`+"\n"
    svg += ` <rect x="10" y="10" width="30" height="30" stroke="black" />`+"\n"
    svg += `</svg>`
    return svg 
};

// init();

fileData = generateSVG();
writeToFile ("SVG_LOGO.svg", fileData);