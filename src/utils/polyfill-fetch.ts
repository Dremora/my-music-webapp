/* eslint-disable import/no-unused-modules */

if (typeof window === "undefined") {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  global.fetch = require("node-fetch");
}

export default fetch;
