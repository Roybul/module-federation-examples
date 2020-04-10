const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

const {devDependencies, dependencies} = require('./package.json')

const reactPackages = Object.keys({...dependencies,...devDependencies}).filter((dependency)=>{
  if(['babel','plugin','preset'].some((dep)=>{return dependency.includes(dep)})) return false
  return dependency.includes('react')
})



module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3001
  },
  output: {
    publicPath: "http://localhost:3001/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"]
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app1",
      library: { type: "var", name: "app1" },
      remotes: {
        app2: "app2"
      },
      shared: reactPackages.reduce((shared,pkg)=>{
        // you can also trim the patch version off so you share at the feature version level
        // react-16.8, not react-16.8.3, Better vendor sharing will be available as you'd share 16.8.x
        let packageVersion = require(pkg + '/package.json').version.split('.');
        packageVersion.pop();
        Object.assign(shared,{[`${pkg}-${packageVersion.join('.')}`]:pkg});
        return shared
      },{})
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
