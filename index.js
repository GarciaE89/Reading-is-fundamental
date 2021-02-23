const inquirer = require('inquirer')

const fs = require('fs')

const util = require('util')

const writeFileAsync = util.promisify(fs.writeFile)

const promptUser = () => 
inquirer.prompt([
    {
        type:'input',
        message: 'what is the name of your project?',

        name:'name'
    
    },

    {
        type:'input',
        message: 'Description for your project?',

        name:'description'
    
    },

    {
        type:'input',
        message: 'instructions for installation?',

        name:'installation'
    
    },
    {
        type:'input',
        message: 'input instructions for use?',

        name:'use'
    
    
    },
    {
        type:'input',
        message: 'input instructions for future contributions?',

        name:'contributions'
    
    },

    {
        type:'input',
        message: 'input instructions for testing?',

        name:'testing'
    
    },
    {
        type:'input',
        message: 'What is your Github username?',

        name:'username'
    
    },
    {
        type:'input',
        message: 'what is your email?',

        name:'email'
    
    },
    {
        type:'list',
        message: 'What is this projects license under?',

        name:'license',
        choices:[
            'MIT', 'Mozilla Pulic license 2.0', 'Open Software license 3.0', 'ISC'
        ]
    
    }
])

const generatereadMe = (response) => 
`# ${response.name} 
--- 
## Table of Contents
* [Description](#description)
* [License](#license)
* [Installation](#installation)
* [Use](#use)
* [Contributions](#contributions)
* [Testing](#testing)
* [Questions](#questions)
## Description
${response.description}
## License
[full license](opensource.org/license/${response.license}).
## installation
${response.installation}
## Use 
${response.use}
## Contributions
${response.contributions}
## Testing
${response.testing}
## Questions 
- Github Profile: https://github.com/${response.username}
- Email: ${response.email}`;

promptUser()
.then((response)=> writeFileAsync('README.MD', generatereadMe(response)))
.catch((err)=>console.error(err));


