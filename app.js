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


const promptProject = portfolioData => {
  //If there's no projects array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }

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
      message: 'Would you like to festure this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to add another project?',
      default: false
    }

  ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  })


// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github)

// fs.writeFile('index.html', pageHTML, err => {
//   if (err) throw err;
//   console.log('Portfolio is complete! Checkout index.html to see the output!')
// });