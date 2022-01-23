const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: isDev ? '/' : '/beer-choice/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: "random beer's choicer",
    },
  },
}
