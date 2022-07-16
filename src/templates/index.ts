import { Application } from "interfaces";
import { GeneratedFile } from "./interfaces/GeneratedFile";
import { getProjectFiles } from "./projectFiles";
import { getSrcFiles } from "./src";

export async function getFiles(application: Application): Promise<GeneratedFile[]> {
  const files: GeneratedFile[] = [];

  const projectFiles = await getProjectFiles(application);
  files.push(...projectFiles);

  const srcFiles = await getSrcFiles(application);
  files.push(...srcFiles);

  return files;
}

