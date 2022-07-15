import { Application } from "interfaces";
import { GeneratedFile } from "templates/interfaces/GeneratedFile";
import { packageJson } from "./packageJson";

export async function getProjectFiles(application: Application): Promise<GeneratedFile[]> {
  const files: GeneratedFile[] = [];

  files.push(packageJson(application));

  return files;
}
