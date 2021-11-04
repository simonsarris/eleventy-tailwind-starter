module.exports = function (eleventyConfig) {

  const inputDir = 'site';
  const outputDir = '_site';

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget("./_tmp/style.css");
  eleventyConfig.addWatchTarget("./_includes/");

  // Changing this means you must also change package.json:
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./assets/css/style.css" });

  // This is only needed if deploying on Netlify
  eleventyConfig.addPassthroughCopy({ [`${inputDir}/_redirects`]: "./_redirects" });

  // 11ty doesn't like "js" in setTemplateFormats, it will try to execute the script
  eleventyConfig.addPassthroughCopy(`${inputDir}/**/*.js`);
  eleventyConfig.addPassthroughCopy(`${inputDir}/**/*.ts`);
  eleventyConfig.addPassthroughCopy(`${inputDir}/**/*.mjs`);
  eleventyConfig.addPassthroughCopy(`${inputDir}/**/*.config`); // for web.configs
  eleventyConfig.addPassthroughCopy(`${inputDir}/robots.txt`);

  // // Copy images
  eleventyConfig.setTemplateFormats([
    "png",
    "jpg",
    "jpeg",
    "gif",
    "webp",
    "svg",
    "html",
    "njk",
    "css", // for prism.css, etc
    "json",
    "xml",
    "ico" // favicon
  ]);

  return {
    dir: {
      input: inputDir,
      output: outputDir
    },
    htmlTemplateEngine: "njk" // Allows .html files to be processed with Nunjucks
  };
};