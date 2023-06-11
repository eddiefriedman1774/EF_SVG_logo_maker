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
        let fileData = generateSVG(userResponses.three_characters,userResponses.text_color, userResponses.shape, userResponses.color)
        writeToFile("SVG_LOGO.svg",fileData)
    } catch (error) {
        console.log(error);
    }
};

function generateSVG (characters, textColor, shapeType, shapeColor) {
    svg = `<?xml version="1.0" standalone="no"?>`+"\n"
    svg += `<svg width="300" height="200" version="1.1"`
    svg += ` xmlns="http://www.w3.org/2000/svg">`+"\n"
    if (shapeType == "square"){
        svg += ` <rect x="100" y="100" width="100" height="100" stroke="${shapeColor}" fill="${shapeColor}" />`+"\n"
    } else if(shapeType== "circle"){
       svg += `<circle cx="149" cy="149" r="20" stroke="${shapeColor}" fill="${shapeColor}" />`
    } else if (shapeType== "triangle"){
        svg+= `<polygon points="100,200,150,100, 200,200" stroke="${shapeColor}" fill="${shapeColor}" />`
    }

    svg += `<text x="135" y="155" stroke="${textColor}" fill="${textColor}">${characters} </text>`
    svg += `</svg>`
    return svg 
};

init();
