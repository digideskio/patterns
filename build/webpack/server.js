const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(3001, 'localhost', (err, result) => {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:3001/');
});
