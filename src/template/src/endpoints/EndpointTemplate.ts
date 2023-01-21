export default `
import { HttpContext } from "tomasjs/core";
import { Endpoint } from "tomasjs/endpoints";

export class {{Name}}Endpoint implements Endpoint {
  handle(context: HttpContext) {
    // Handle request
  }
}
`;
