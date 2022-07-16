import { Application } from "interfaces";
import { GeneratedFile } from "templates/interfaces/GeneratedFile";

export function prettierrc(_application: Application): GeneratedFile {

  const content: string [] = [ `{
    "singleQuote": true,
    "trailingComma": "all"
  }
  `];

 const fileContent = content.join('');

  const file: GeneratedFile = {
    fileName: '.prettierrc',
    filePath: [],
    fileContent
  }

  return file;
}
