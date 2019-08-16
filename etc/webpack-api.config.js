/* eslint-disable no-console */
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const fs = require('fs-extra');
const path = require('path');

const webpackConfig = {
    entry: {
        app: `${__dirname}/../shared/api/server.js`
    },
    output: {
        path: `${__dirname}/../bin`,
        filename: 'server.js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [nodeExternals()],
    optimization: {
        splitChunks: false,
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                extractComments: false,
            })
        ]
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    {
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-syntax-dynamic-import',
                            'macros',
                            ['@babel/transform-runtime', {
                                regenerator: true
                            }]
                        ]
                    }
                ]
            }
        }]
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ]
};

console.log('Getting modules info...');
const modules = fs.readdirSync(path.join(__dirname, '..', 'modules'));
const modulesInfo = {};
modules.map(module => modulesInfo[module] = require(path.join(__dirname, '..', 'modules', module, 'module.json')));
console.log('Writing modules.json...');
fs.writeJSONSync(path.join(__dirname, '..', 'shared', 'build', 'modules.json'), modulesInfo);
const linguiUser = {
    localeDir: 'shared/locales/combined/user',
    srcPathDirs: [],
    format: 'po'
};
const linguiPathsArrUser = modules.map(module => `modules/${module}/frontend/components/user/`);
linguiUser.srcPathDirs = ['shared/components/', ...linguiPathsArrUser];
console.log('Writing linguirc.user.json...');
fs.writeJSONSync(`${__dirname}/linguirc.user.json`, linguiUser, {
    spaces: 2
});
const linguiAdmin = {
    localeDir: 'shared/locales/combined/admin',
    srcPathDirs: [],
    format: 'po'
};
const linguiPathsArrAdmin = modules.map(module => `modules/${module}/frontend/components/admin/`);
linguiAdmin.srcPathDirs = ['shared/components/', ...linguiPathsArrAdmin];
console.log('Writing linguirc.admin.json...');
fs.writeJSONSync(`${__dirname}/linguirc.admin.json`, linguiAdmin, {
    spaces: 2
});
console.log('Staring Webpack...');
module.exports = webpackConfig;
