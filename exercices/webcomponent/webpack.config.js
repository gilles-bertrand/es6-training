const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "component.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map"
};
