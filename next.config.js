module.exports = {
  cacheHandler: require.resolve('./cache-handler.js'),
  cacheMaxMemorySize: 0, // disable default in-memory caching

  generateBuildId: async () => {
    // Generate a unique build ID here
    return 'my-build-id';
  },
}