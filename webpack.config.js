module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  mode: 'development',
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: [
                  {
                      loader: 'babel-loader',
                      options: {
                          presets: [['@babel/preset-env', { modules: false }]]
                      }
                  }
              ]
          }
      ]
  }
}