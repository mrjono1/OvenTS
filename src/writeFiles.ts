import { access, mkdir, writeFile } from "fs/promises";
import { Application } from "interfaces";
import path from "node:path";
import { GeneratedFile } from "templates/interfaces/GeneratedFile";

export async function writeFiles(application: Application, files: GeneratedFile[]): Promise<void> {


  try {
    await access(application.outputDirectory);
  } catch {
    console.log(`Creating ${application.outputDirectory}`);
    await mkdir(application.outputDirectory);
  }

  for await (const file of files) {
    const filePath = path.join(application.outputDirectory, file.filePath, file.fileName);

    // TODO: format files

    console.log(`Writing ${filePath}`);
    await writeFile(filePath, file.fileContent);
  }
}
