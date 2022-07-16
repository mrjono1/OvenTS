import { Application } from "interfaces";
import { GeneratedFile } from "templates/interfaces/GeneratedFile";

export function appControllerTs(_application: Application): GeneratedFile {

  const content: string [] = [ `import { Controller, Get } from '@nestjs/common';
  import { AppService } from './app.service';

  @Controller()
  export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
      return this.appService.getHello();
    }
  }
`];

 const fileContent = content.join('');

  const file: GeneratedFile = {
    fileName: 'app.controller.ts',
    filePath: ['src','controllers'],
    fileContent
  }

  return file;
}
