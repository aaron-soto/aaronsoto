module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets/')
  eleventyConfig.addPassthroughCopy('src/css/')
  eleventyConfig.addPassthroughCopy('src/vendor/')
  eleventyConfig.addPassthroughCopy('src/js/')

  eleventyConfig.addWatchTarget('src/css/')

  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`)

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: '_site'
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  }
}
