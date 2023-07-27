
// Import required modules and shape classes
const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./circle'); // Import the Circle class from Circle.js
const Triangle = require('./triangle'); // Import the Triangle class from Triangle.js
const Square = require('./square'); // Import the Square class from Square.js

// Function to render the logo based on user input
function renderLogo(text, textColor, shape, shapeColor) {
  // Generate the SVG content based on the users' choices
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render(shapeColor)} <!-- Render the selected shape with the shapeColor -->
      <text x="50%" y="50%" fill="${textColor}" font-size="24" text-anchor="middle">${text}</text>
      <!-- Render the text -->
    </svg>
  `;
  return svgContent;
}

// Function to write the logo content to logo.svg file
function writeLogoToFile(logoContent, text) {
  fs.writeFile('logo.svg', logoContent, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Generated ${text} logo successfully`);
    }
  });
}

// Prompt the user for logo information
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Select 3 characters for your logo!',
      name: 'text',
      validate: function (input) {
        return input.length > 0 && input.length <= 3 ? true : 'Please enter 1 to three characters.';
      },
    },
    {
      type: 'input',
      message: 'Enter color for your logo text!',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Enter a shape!',
      name: 'shape',
      choices: ['Circle', 'Square', 'Triangle'],
    },
    {
      type: 'input',
      message: 'Enter shape color of your logo!',
      name: 'shapeColor',
    },
  ])
  .then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;
    // Find the shapes array
    const selectedShape = shapes.find((s) => s.shapetype === shape);
    // Render the logo with the provided user input
    const logoContent = renderLogo(text, textColor, selectedShape, shapeColor);
    // Write the logo content to logo.svg file
    writeLogoToFile(logoContent, text);
  })
  .catch((error) => {
    console.log(error);
  });

// Array of shape classes for usage in the module
const shapes = [new Circle(), new Triangle(), new Square()];
