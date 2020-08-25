// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.link}

  ## Description 
  ${data.description}

  ## Table of Contents 
  
  * [instalation](#instalation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  
  To install necessary dependancies, run the following command: 
  ${data.dependencies}
  
  ## Usage
  
  ${data.using}
  
  ## License
  
  This project is licensed under the ${data.license} license 
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  to run tests, run the following command:

  ${data.tests}

  ## Questions
  
  If you have any questions anout the repo, open an issue or contact me directly at [${data.username}](https://github.com/${data.username}/). 
  Or send me an email at [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
