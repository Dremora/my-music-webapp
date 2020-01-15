if (typeof window === 'undefined') {
  // @ts-ignore
  global.fetch = require('node-fetch');
}

export default fetch;
