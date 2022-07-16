import { Application } from "interfaces";
import { GeneratedFile } from "templates/interfaces/GeneratedFile";

export function tsconfigJson(_application: Application): GeneratedFile {

  const content: string [] = [ `{
    "compilerOptions": {
      "module": "commonjs",
      "declaration": true,
      "removeComments": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "allowSyntheticDefaultImports": true,
      "target": "es2017",
      "sourceMap": true,
      "outDir": "./dist",
      "baseUrl": "./",
      "incremental": true,
      "skipLibCheck": true
    }
  }
  `];

 const fileContent = content.join('');

  const file: GeneratedFile = {
    fileName: 'tsconfig.json',
    filePath: [],
    fileContent
  }

  return file;
}
