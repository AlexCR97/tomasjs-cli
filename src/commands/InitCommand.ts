import childProcess from "child_process";
import { Command } from "commander";
import inquirer from "inquirer";
import path from "path";
import { environment } from "@/environment.js";
import { files } from "@/services/index.js";
import gitignoreTemplate from "@/template/gitignore.js";
import packageJsonTemplate from "@/template/package.json.js";
import tsconfigTemplate from "@/template/tsconfig.json.js";
import mainTemplate from "@/template/src/main.js";
import helloWorldEndpointTemplate from "@/template/src/endpoints/HelloWorldEndpoint.js";
import endpointsTemplate from "@/template/src/endpoints/index.js";

export const InitCommand = new Command()
  .name("init")
  .description("Initializes a new TomasJS project")
  .action(async () => {
    const answers = await askQuestionsAsync();

    // Create project layout (directories)
    console.log("Creating project layout...");
    files.ensureDirectory(path.join(environment.tempPath, "src", "endpoints"));
    files.ensureDirectory(path.join(environment.tempPath, "src", "guards"));
    files.ensureDirectory(path.join(environment.tempPath, "src", "middlewares"));
    files.ensureDirectory(path.join(environment.tempPath, "src", "pipes"));

    // Create files
    console.log("Creating project files...");
    const packageJsonContent = applyTemplate(packageJsonTemplate, answers);
    files.create(path.join(environment.tempPath, "package.json"), packageJsonContent.trim());
    files.create(path.join(environment.tempPath, ".gitignore"), gitignoreTemplate.trim());
    files.create(path.join(environment.tempPath, "tsconfig.json"), tsconfigTemplate.trim());
    files.create(path.join(environment.tempPath, "src", "main.ts"), mainTemplate.trim());
    files.create(
      path.join(environment.tempPath, "src", "endpoints", "index.ts"),
      endpointsTemplate.trim()
    );
    files.create(
      path.join(environment.tempPath, "src", "endpoints", "HelloWorldEndpoint.ts"),
      helloWorldEndpointTemplate.trim()
    );

    // Install modules
    console.log("Installing node_modules...");
    process.chdir(environment.tempPath);
    childProcess.execSync("npm install");

    console.log("Your TomasJS project has been created!\n");
    console.log("Next:");
    console.log('1. Run the "npm run watch" command');
    console.log("2. Go to http://localhost:3000/hello-world");
  });

interface Answers {
  name: string;
  description: string;
  author: string;
}

async function askQuestionsAsync(): Promise<Answers> {
  return await inquirer.prompt<Answers>([
    {
      message: "App name:",
      name: "name",
      default: "name",
    },
    {
      message: "Description:",
      name: "description",
      default: "description",
    },
    {
      message: "Author:",
      name: "author",
      default: "author",
    },
  ]);
}

function applyTemplate(template: string, values: Record<keyof any, any>): string {
  Object.keys(values).forEach((key) => {
    template = template.replace(`{{${key}}}`, values[key]);
  });
  return template;
}
