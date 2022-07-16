import { Application } from "interfaces";
import { GeneratedFile } from "templates/interfaces/GeneratedFile";

export function readmeMd(application: Application): GeneratedFile {

  const content: string [] = [ `#${application.name}
${application.description}
`];

 const fileContent = content.join('');

  const file: GeneratedFile = {
    fileName: 'README.MD',
    filePath: [],
    fileContent
  }

  return file;
}
