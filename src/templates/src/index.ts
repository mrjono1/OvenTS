import { Application } from "interfaces";
import { GeneratedFile } from "templates/interfaces/GeneratedFile";
import { appModuleTs } from "./appModuleTs";
import { getControllerFiles } from "./controller";
import { mainTs } from "./mainTs";
import { getServiceFiles } from "./services";

export async function getSrcFiles(application: Application): Promise<GeneratedFile[]> {
  const files: GeneratedFile[] = [];

  files.push(mainTs(application));
  files.push(appModuleTs(application));

  const serviceFiles = await getServiceFiles(application);
  files.push(...serviceFiles);

  const controllerFiles = await getControllerFiles(application);
  files.push(...controllerFiles);

  return files;
}
