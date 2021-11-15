const inquirer = require('inquirer')
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your Github username?'
    },
    {
      type: 'input',
      name: 'about',
      message: 'Tell us about yourself'
    }
  ]);
};


const promptProject = () => {
  console.log(`

=====
Add a New Project
===
  `);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is name of your Project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project (Required)'
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you use to build this project? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Boootstrap', 'Node']

    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter deployed link to your project. (Required)'
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to add another project?',
      default: false
    }

  ])
}

promptUser()
.then(answers => console.log(answers))
.then(promptProject)
.then(projectAnswers => console.log(projectAnswers));

// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github)

// fs.writeFile('index.html', pageHTML, err => {
//   if (err) throw err;
//   console.log('Portfolio is complete! Checkout index.html to see the output!')
// });