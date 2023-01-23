export default `
import { HttpContext } from "tomasjs/core";
import { Endpoint } from "tomasjs/endpoints";

export class {{name}}Endpoint implements Endpoint {
  handle(context: HttpContext) {
    // Handle request
  }
}
`;
