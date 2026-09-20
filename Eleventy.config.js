export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("*.css");
    eleventyConfig.addPassthroughCopy("main.js");
    eleventyConfig.addPassthroughCopy("*.pdf");
    eleventyConfig.addPassthroughCopy("*.jpg");
    eleventyConfig.addPassthroughCopy("*.png");
    eleventyConfig.addPassthroughCopy("*.gif");
    eleventyConfig.addPassthroughCopy("Projects/**/*.css");
    eleventyConfig.addPassthroughCopy("Projects/**/*.png");
    eleventyConfig.addPassthroughCopy("Projects/**/*.jpg");
    eleventyConfig.addPassthroughCopy("Projects/**/*.gif");
    eleventyConfig.addPassthroughCopy("Projects/**/*.js");
    eleventyConfig.addPassthroughCopy("Projects/**/*.html");
    eleventyConfig.ignores.add("README.md");

    return {
        pathPrefix: "/Website/"
    };
};