const { createTemplate, listTemplates } = require("./template");

module.exports = {
  template: {
    clone: createTemplate,
    list: listTemplates,
  },
};
