import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const environment = {
  srcPath: __dirname,
  tempPath: path.join(__dirname, "..", "temp"),
};
