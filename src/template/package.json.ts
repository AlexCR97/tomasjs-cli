export default `
{
  "name": "{{name}}",
  "description": "{{description}}",
  "author": "{{author}}",
  "license": "ISC",
  "scripts": {
    "serve": "ts-node -r tsconfig-paths/register ./src/main.ts",
    "watch": "nodemon -r tsconfig-paths/register ./src/main.ts"
  },
  "devDependencies": {
    "@types/express": "^4.17.14",
    "nodemon": "^2.0.20",
    "ts-node": "^10.9.1",
    "tsconfig-paths": "^4.1.0",
    "typescript": "^4.9.3"
  },
  "dependencies": {
    "class-transformer": "^0.5.1",
    "express": "^4.18.2",
    "express-async-errors": "^3.1.1",
    "inversify": "^6.0.1",
    "reflect-metadata": "^0.1.13",
    "tomasjs": "^0.3.3"
  }
}
`;
