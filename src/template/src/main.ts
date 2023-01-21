export default `
import "express-async-errors";
import "reflect-metadata";
import { AppBuilder, ContainerBuilder } from "tomasjs/builder";
import { HelloWorldEndpoint } from "./endpoints";

const PORT = 3000

async function main() {
  await new ContainerBuilder()
    .setup(services => {
      // Initialize your dependencies here
    })
    .buildAsync();

  // Initialize your http pipeline here
  await new AppBuilder()
    .useJson()
    .useEndpoint(HelloWorldEndpoint)
    .buildAsync(PORT);

  console.log("TomasJS app running at http://localhost:" + PORT);
}

main();
`;
