import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";

export class Files {
  copy(sourcePath: string, destinationPath: string): void {
    copyFileSync(sourcePath, destinationPath);
  }

  create(path: string, content: string): void {
    writeFileSync(path, content);
  }

  ensureDirectory(path: string): void {
    if (existsSync(path)) {
      return;
    }

    mkdirSync(path, { recursive: true });
  }

  read(path: string): string {
    return readFileSync(path, "utf8");
  }
}
