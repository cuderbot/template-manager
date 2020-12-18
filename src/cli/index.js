const yargs = require("yargs");

const { templateManagerLogo } = require("./logo");
const { createCommand, listCommand } = require("./commands");

const cli = () => {
  // Logo
  templateManagerLogo();

  // CLI options
  yargs
    .version()
    .help()
    .command(
      "create",
      "create a new project",
      {
        form: {
          alias: "f",
        },
      },
      (cmd) => {
        createCommand(cmd);
      }
    )
    .command(
      "list",
      "list all the templates",
      {
        form: {
          alias: "l",
        },
      },
      (cmd) => {
        listCommand(cmd);
      }
    )
    .help()
    .demandCommand()
    .showHelpOnFail().argv;
};

module.exports = cli;
