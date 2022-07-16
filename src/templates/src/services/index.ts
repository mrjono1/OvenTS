import { Application } from "interfaces";
import { GeneratedFile } from "templates/interfaces/GeneratedFile";
import { appServiceTs } from "./appServiceTs";

export async function getServiceFiles(application: Application): Promise<GeneratedFile[]> {
  const files: GeneratedFile[] = [];

  files.push(appServiceTs(application));

  return files;
}
