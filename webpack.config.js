module.exports = {
    entry: "./entry.ts",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve: {
      extensions: ['', '.ts', '.scss', '.css']
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        },
        {
          test: /\.ts$/,
          loader: "ts-loader"
        }
      ]
    }
};
