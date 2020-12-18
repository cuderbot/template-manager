const chalk = require("chalk");
const {
  template: { list },
} = require("../../functions");

const listCommand = async (argv) => {
  const templatesList = await list();
  templatesList.forEach((template) =>
    console.log(chalk.magentaBright(template))
  );
};

module.exports = listCommand;
