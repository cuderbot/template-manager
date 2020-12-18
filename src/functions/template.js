const fs = require("fs").promises;
const { templatesPath } = require("../config");

const createTemplate = async ({ projectPath, templateChoice }) => {
  await fs.mkdir(projectPath);
  const templatePath = `${templatesPath}/${templateChoice}`;
  await cloneFiles(projectPath, templatePath);
};

const listTemplates = async () => {
  return fs.readdir(templatesPath);
};

// Copia los archivos desde la base hasta el punto del nuevo proyecto
const cloneFiles = async (projectPath, templatePath) => {
  const templateFiles = await fs.readdir(templatePath);
  templateFiles.forEach(async (fileTemplate) => {
    console.log(fileTemplate);
    const stat = await fs.stat(`${templatePath}/${fileTemplate}`);
    if (stat.isFile()) {
      const content = await fs.readFile(`${templatePath}/${fileTemplate}`, {
        encoding: "utf8",
      });
      await fs.writeFile(`${projectPath}/${fileTemplate}`, content, "utf8");
    } else {
      await fs.mkdir(`${projectPath}/${fileTemplate}`);
      await cloneFiles(
        `${projectPath}/${fileTemplate}`,
        `${templatePath}/${fileTemplate}`
      );
    }
  });
};

module.exports = {
  createTemplate,
  listTemplates,
};
