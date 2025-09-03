module.exports = function(eleventyConfig) {
  // Copy styles to _site/style.css
  eleventyConfig.addPassthroughCopy('src/assets/styles/style.css');

  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
