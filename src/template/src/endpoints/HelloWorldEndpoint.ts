export default `
import { HttpContext } from "tomasjs/core";
import { Endpoint, endpoint, path } from "tomasjs/endpoints";

@endpoint("get")
@path("hello-world")
export class HelloWorldEndpoint implements Endpoint {
  handle(context: HttpContext) {
    return "Hello, World!";
  }
}
`;
