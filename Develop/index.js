const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, installation, usage, license, 
    contributing, github, email, tests, questions }) =>
  ``;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are your installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage of your project?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'What license does your project have?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who contributed to the project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateREADME(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });