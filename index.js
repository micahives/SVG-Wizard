const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { fileURLToPath } = require('url');
const shapes = require('./lib/shapes.js');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

// register the prompt for the max-length capabilities for the first user prompt (up to 3 chars)
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

// App initializer function with inquirer prompts
function init() {
    inquirer.prompt([
        {
        type: 'maxlength-input',
        name: 'textContent',
        message: 'Enter up to three characters for your logo',
        maxLength: 3
        },
        {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword or hexadecimal color value for text color'
        },
        {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo',
        choices: ['Circle', 'Triangle', 'Square']
        },
        {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword or hexadecimal color value for shape color'
        },       
    ])
    .then((response) => {
        writeToFile(response);
    })
}

// Function to create .svg file
function writeToFile(response) {
    const generateLogo = generateSvg(response)

    fs.writeFile(path.join(__dirname, '/examples', 'logo.svg'), generateLogo, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg!')
)};

function generateSvg(response) {
    if (response.shape === 'Circle') {
        const circle = new shapes.Circle(response.shapeColor, response.textColor, response.textContent);
        return circle.render();
    } else if (response.shape === 'Triangle') {
        const triangle = new shapes.Triangle(response.shapeColor, response.textColor, response.textContent);
        return triangle.render();
    } else {
        const square = new shapes.Square(response.shapeColor, response.textColor, response.textContent);
        return square.render();
    }
}

init();