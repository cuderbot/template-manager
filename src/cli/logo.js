const chalk = require("chalk");
const figlet = require("figlet");

const templateManagerLogo = () => {
  console.log(
    chalk.greenBright(
      figlet.textSync("TEMPLATE MANAGER", { horizontalLayout: "default" })
    )
  );
};

module.exports = {
  templateManagerLogo,
};
