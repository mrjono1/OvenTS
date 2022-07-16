import { Application } from "interfaces";
import { GeneratedFile } from "templates/interfaces/GeneratedFile";

export function mainTs(_application: Application): GeneratedFile {

  const content: string [] = [ `import { NestFactory } from '@nestjs/core';
  import { AppModule } from './app.module';

  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
  }
  bootstrap();
`];

 const fileContent = content.join('');

  const file: GeneratedFile = {
    fileName: 'main.ts',
    filePath: ['src'],
    fileContent
  }

  return file;
}
