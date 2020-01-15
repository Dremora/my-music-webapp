module.exports = {
  client: {
    service: {
      name: 'my-music-api',
      url: 'http://localhost:4000'
    },
    includes: ['./src/queries/**/*.ts', './src/mutations/**/*.ts']
  }
};
