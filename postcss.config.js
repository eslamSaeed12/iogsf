const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [autoprefixer("last 2 versions")],
  browserslist: "last 2 versions"
};
