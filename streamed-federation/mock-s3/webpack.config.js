module.exports = {
  entry: "./s3server",
  mode: "development",
  devtool: false,
  target: "node",
  output: {
    path: __dirname,
  },
  externals: { "./federatedFile.js": 'require("./federatedFile.js")' },
  plugins: [],
};
