import { access, mkdir, writeFile } from "fs/promises";
import { Application } from "interfaces";
import path from "node:path";
import { GeneratedFile } from "templates/interfaces/GeneratedFile";

export async function writeFiles(application: Application, files: GeneratedFile[]): Promise<void> {

  for await (const file of files) {

    const fileDirectory = path.join(application.outputDirectory, ...file.filePath);

    // Create output direcory
    try {
      await access(fileDirectory);
    } catch {
      console.log(`Creating ${fileDirectory}`);
      await mkdir(fileDirectory);
    }
    const filePath = path.join(fileDirectory, file.fileName);

    // TODO: format files

    console.log(`Writing ${filePath}`);
    await writeFile(filePath, file.fileContent);
  }
}
