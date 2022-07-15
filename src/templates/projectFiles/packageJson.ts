import { Application } from "interfaces";
import { GeneratedFile } from "templates/interfaces/GeneratedFile";

export function packageJson(application: Application): GeneratedFile {

  const content: string [] = [ `{
  "name": "${application.name}",
  "description": "${application.description}"`];

  if (application.version){
    content.push(`,
  "version": ${application.version}`);
  }
  content.push(`
}
`);

 const fileContent = content.join('');

  const file: GeneratedFile = {
    fileName: 'package.json',
    filePath: '',
    fileContent
  }

  return file;
}
