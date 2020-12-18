const inquirer = require("inquirer");
const {
  template: { clone },
} = require("../../functions");
const { templateChoices } = require("../../config");

const QUESTIONS = [
  {
    type: "input",
    name: "projectName",
    message: "ingrese el nombre del proyecto",
    default: "",
  },
  {
    type: "list",
    name: "projectType",
    message: "seleccione el tipo de proyectos que desee",
    choices: templateChoices,
  },
  {
    type: "confirm",
    name: "projectDependencies",
    message: "¿Desea instalar las dependencias?",
  },
];

const createCommand = async (argv) => {
  const answers = await inquirer.prompt(QUESTIONS);
  console.log(answers);
  await clone({
    projectPath: `${process.cwd()}/${answers["projectName"]}`,
    templateChoice: answers["projectType"],
  });
};

module.exports = createCommand;
