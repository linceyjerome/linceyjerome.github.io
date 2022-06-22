const postcssPresetEnv = require(`postcss-preset-env`)
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
module.exports = () => ({
    plugins: [
        require('postcss-simple-vars'),
        postcssPresetEnv({
            stage: 0,
        }),
        tailwindcss,
        autoprefixer
    ],
})