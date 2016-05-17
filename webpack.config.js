module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        // preLoaders: [
        //   { test: /\.jsx?$/, loader: "eslint", exclude: /node_modules/ }
        //
        // ],
        loaders: [
          { test: /\.css$/, loader: "style!css" },
          { test: /\.jsx?$/, loader: "babel",  "query":{presets: [ 'es2015', 'react']} }

        ]
    }
};
