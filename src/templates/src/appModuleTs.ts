import { Application } from "interfaces";
import { GeneratedFile } from "templates/interfaces/GeneratedFile";

export function appModuleTs(_application: Application): GeneratedFile {

  const content: string [] = [ `import { Module } from '@nestjs/common';
  import { AppController } from './controllers/app.controller';
  import { AppService } from './services/app.service';

  @Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService],
  })
  export class AppModule {}
`];

 const fileContent = content.join('');

  const file: GeneratedFile = {
    fileName: 'app.module.ts',
    filePath: ['src'],
    fileContent
  }

  return file;
}
