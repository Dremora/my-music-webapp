const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = phase => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const env = {
    API_URL: (() => {
      if (isDev) return 'http://localhost:4000';
      if (isProd) {
        return 'https://my-music-api.dremora.com';
      }
    })()
  };

  return { env };
};
