import { Command } from "commander";
import { GenerateEndpointCommand } from "./GenerateEndpointCommand.js";

export const GenerateCommand = new Command().name("generate").addCommand(GenerateEndpointCommand);
