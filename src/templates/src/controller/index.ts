import { Application } from "interfaces";
import { GeneratedFile } from "templates/interfaces/GeneratedFile";
import { appControllerTs } from "./appServiceTs";

export async function getControllerFiles(application: Application): Promise<GeneratedFile[]> {
  const files: GeneratedFile[] = [];

  files.push(appControllerTs(application));

  return files;
}
