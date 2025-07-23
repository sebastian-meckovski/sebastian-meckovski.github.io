require('dotenv').config();

module.exports = function(eleventyConfig) {
  eleventyConfig.addGlobalData("env", process.env);
  eleventyConfig.addPassthroughCopy("assets");
  return {
    dir: {
      input: "src",
      output: "_site",
    }
  };
};
