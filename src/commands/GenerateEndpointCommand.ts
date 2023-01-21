import { environment } from "@/environment.js";
import { Files } from "@/services/Files.js";
import { Command } from "commander";
import path from "path";

export const GenerateEndpointCommand = new Command()
  .name("endpoint")
  .argument("<path>")
  .description("Generates an endpoint")
  .action((pathArg: string) => {
    const files = new Files();
    const pathPartsWithFileName = pathArg.split("/");
    const pathPartsWithoutFileName = pathPartsWithFileName.slice(0, -1);
    const endpointName = pathPartsWithFileName[pathPartsWithFileName.length - 1];
    const finalFileName = `${endpointName}Endpoint.ts`;
    const pathWithoutFile = path.join("temp", "endpoints", ...pathPartsWithoutFileName);
    const pathWithFile = path.join("temp", "endpoints", ...pathPartsWithoutFileName, finalFileName);

    const endpointTemplatePath = path.join(
      environment.srcPath,
      "template",
      "src",
      "endpoints",
      "EndpointTemplate.txt"
    );
    const fileContent = files.read(endpointTemplatePath).replace("{{Name}}", endpointName);

    console.log("pathWithoutFile", pathWithoutFile);
    console.log("pathWithFile", pathWithFile);
    console.log("fileContent", fileContent);
    // files.ensureDirectory(pathWithoutFile);
    // files.create(pathWithFile, fileContent);
  });
