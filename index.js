import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Shape, Circle, Triangle, Square } from './lib/shapes.js';
import MaxLengthInputPrompt from 'inquirer-maxlength-input-prompt';

// register the prompt for the max-length capabilities for the first user prompt (up to 3 chars)
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);


// for managing/altering file paths with path module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// App initializer function with inquirer prompts
function init() {
    inquirer.prompt([
        {
        type: 'maxlength-input',
        name: 'text',
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
    // Logic for handling potential user shape selections
    // TODO: abstract the shared shape code in the render shape class and instantiate to not have to rewrite code
    if (response.shape === 'Circle') {
        const selectedShape = new Circle();
        return `<svg 
        xmlns="http://www.w3.org/2000/svg" 
        version="1.1" 
        width="300" 
        height="200">
    
        ${selectedShape.render()} fill="${response.shapeColor}"/>
    
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
    
        </svg>`;

    } else if (response.shape === 'Triangle') {
        const selectedShape = new Triangle();
        return `<svg 
        xmlns="http://www.w3.org/2000/svg" 
        version="1.1" 
        width="300" 
        height="200">
    
        ${selectedShape.render()} fill="${response.shapeColor}"/>
    
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
    
        </svg>`;

    } else {
        const selectedShape = new Square();
        return `<svg 
        xmlns="http://www.w3.org/2000/svg" 
        version="1.1" 
        width="300" 
        height="200">
    
        ${selectedShape.render()} fill="${response.shapeColor}"/>
    
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
    
        </svg>`;
    }
}

init();