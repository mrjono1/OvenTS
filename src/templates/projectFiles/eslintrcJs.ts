import { Application } from "interfaces";
import { GeneratedFile } from "templates/interfaces/GeneratedFile";

export function eslintrfJs(_application: Application): GeneratedFile {

  const content: string [] = [ `module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir : __dirname,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    root: true,
    env: {
      node: true,
      jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  };
  `];

 const fileContent = content.join('');

  const file: GeneratedFile = {
    fileName: '.eslintrc.js',
    filePath: [],
    fileContent
  }

  return file;
}
