import { Application } from "interfaces";
import { GeneratedFile } from "templates/interfaces/GeneratedFile";
import { eslintrfJs } from "./eslintrcJs";
import { packageJson } from "./packageJson";
import { prettierrc } from "./prettierrc";
import { readmeMd } from "./readmeMd";
import { tsconfigBuildJson } from "./tsconfigBuildJson";
import { tsconfigJson } from "./tsconfigJson";

export async function getProjectFiles(application: Application): Promise<GeneratedFile[]> {
  const files: GeneratedFile[] = [];

  files.push(packageJson(application));
  files.push(readmeMd(application));
  files.push(tsconfigJson(application));
  files.push(tsconfigBuildJson(application));
  files.push(prettierrc(application));
  files.push(eslintrfJs(application));

  return files;
}
