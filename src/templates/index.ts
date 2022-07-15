import { Application } from "interfaces";
import { GeneratedFile } from "./interfaces/GeneratedFile";
import { getProjectFiles } from "./projectFiles";

export async function getFiles(application: Application): Promise<GeneratedFile[]> {
  const files: GeneratedFile[] = [];
  const projectFiles = await getProjectFiles(application);

  files.push(...projectFiles);

  return files;
}

