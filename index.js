const inquirer = require('inquirer');
const fs = require('fs');

// App initializer function with inquirer prompts
function init() {
    inquirer.prompt([
        {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo'
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
        choices: ['Circle', 'Triangle', 'Square'],
        },
        {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword or hexadecimal color value for shape color'
        },       
    ])
    .then((response) => {
        writeSvg(response);
    })
}

// Function to convert user responses into content for a generated .svg file
function writeSvg(response) {

    fs.writeFile('logo.svg');
}

init();