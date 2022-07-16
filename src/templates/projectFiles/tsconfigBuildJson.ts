import { Application } from "interfaces";
import { GeneratedFile } from "templates/interfaces/GeneratedFile";

export function tsconfigBuildJson(_application: Application): GeneratedFile {

  const content: string [] = [ `{
    "extends": "./tsconfig.json",
    "exclude": ["node_modules", "dist", "test", "**/*spec.ts"]
  }
  `];

 const fileContent = content.join('');

  const file: GeneratedFile = {
    fileName: 'tsconfig.build.json',
    filePath: [],
    fileContent
  }

  return file;
}
