import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// import { Shape, Circle } from './examples/lib/shapes.js';

// for managing/altering file paths with path module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
        writeToFile(response);
    })
}

// Function to create .svg file
function writeToFile(response) {
    const generateLogo = generateSvg(response)

    fs.writeFile(path.join(__dirname, '/examples', 'logo.svg'), generateLogo, (err) =>
    err ? console.log(err) : console.log('Successfully created logo.svg!')
)};

function generateSvg(response) {
    return `<svg 
    xmlns="http://www.w3.org/2000/svg" 
    version="1.1" 
    width="300" 
    height="200">

    <circle cx="150" cy="100" r="80" fill="green"/>

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

    </svg>`;
}

init();