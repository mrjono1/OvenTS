import { Application } from "interfaces";
import { GeneratedFile } from "templates/interfaces/GeneratedFile";

export function appServiceTs(_application: Application): GeneratedFile {

  const content: string [] = [ `import { Injectable } from '@nestjs/common';

  @Injectable()
  export class AppService {
    getHello(): string {
      return 'Hello World!';
    }
  }
`];

 const fileContent = content.join('');

  const file: GeneratedFile = {
    fileName: 'app.service.ts',
    filePath: ['src','services'],
    fileContent
  }

  return file;
}
