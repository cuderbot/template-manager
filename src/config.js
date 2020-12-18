const fs = require('fs');
const path = require('path');

module.exports = {
    templatesPath: path.resolve(`${__dirname}/../templates/`),
    templateChoices: fs.readdirSync(path.resolve(`${__dirname}/../templates/`)),
}