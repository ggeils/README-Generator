const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, installation, usage, license, 
    contributing, github, email, tests, questions }) =>
  `# ${title}

## Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)

 ## Description
 ${description}

 ## Installation
 ${installation}

 ## Usage
 ${usage}

 ## License
 ${license}

 ## Contributing
 ${contributing}
 
 ## Tests
 ${tests}

 ## Questions
 ${questions}
  `;

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
    {
        type: 'input',
        name: 'tests',
        message: 'What are your test instructions?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Peviously asked questions?',
    },
  ])
  .then((answers) => {
    const readmeContent = generateREADME(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully generated README.md!')
    );
  });