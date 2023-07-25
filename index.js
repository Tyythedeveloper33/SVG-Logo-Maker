const svg = require('./generatesvg.js')
const inquirer = require('inquirer');



 const prompts = [
    {
        type: 'input',
        message: 'select 3 characters for your logo !',
        name: 'text',
        validate: function(input){
            return input.length > 0 && input.length <= 3 ? true:'please enter 1 to three characters.';
        }
    },
    {
        type: 'input',
        message: 'enter color for your logo text!',
        name: 'Text-color',
        
    },
    {
        type: 'list',
        message: 'Enter a shape !',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        message: 'Enter shape color of your logo  !',
        name: 'Shapes-color',
        
        
        
    },
 ]
 inquirer
 .prompt(prompts)
 .then((answers) => {
    
    let returnedData = generateSvg(answers);
    writeToFile('index.html', returnedData);
}).catch((error) => {
    console.log(error);
});

function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`svg file created successfully`);
      }
    });
  }
  
  