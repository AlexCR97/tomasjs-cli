import { Command } from "commander";
import { GenerateCommand, InitCommand } from "./commands/index.js";

const app = new Command()
  .name("tomas")
  .description("The official CLI for TomasJS")
  .version("0.0.1");

app.addCommand(InitCommand);
app.addCommand(GenerateCommand);

app.parse();
