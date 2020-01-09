module.exports = {
  client: {
    service: {
      name: 'my-music-api',
      url: 'http://localhost:4000'
    },
    includes: ['./src/**/query.ts', './src/**/mutation.ts']
  }
};
