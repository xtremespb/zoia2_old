/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const webpackConfig = {
    entry: {
        app: path.resolve(__dirname, 'shared', 'components', 'entrypoint.jsx')
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'static', 'data'),
        publicPath: '/data/',
        filename: '[name]_[chunkhash].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.s?css$/,
                    chunks: 'all',
                    minChunks: 2,
                    enforce: true
                },
                vendor: {
                    test: /[\\/](node_modules)[\\/]/,
                    name: 'vendors'
                }
            }
        },
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                extractComments: false,
                terserOptions: {
                    output: {
                        comments: /@license/i
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorPluginOptions: {
                    preset: ['default', {
                        discardComments: {
                            removeAll: true
                        }
                    }]
                }
            })
        ]
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
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
            },
            {
                test: /\.s?css$/,
                use: [{
                        loader: ExtractCssChunks.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new ExtractCssChunks({
            filename: '[name]_[chunkhash].css',
            chunkFilename: '[name]_[chunkhash].css',
            orderWarning: true
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'static', 'index.html'),
            chunks: ['app', 'styles', 'vendors'],
            template: path.resolve(__dirname, 'shared', 'templates', 'template.html')
            // minify: {
            //     collapseWhitespace: true,
            //     removeComments: true,
            //     removeRedundantAttributes: true,
            //     removeScriptTypeAttributes: true,
            //     removeStyleLinkTypeAttributes: true,
            //     useShortDoctype: true
            // }
        })
    ]
};
console.log('Cleaning up...');
fs.removeSync(path.resolve(__dirname, 'static', 'data'));
fs.removeSync(path.resolve(__dirname, 'static', 'index.html'));
console.log('Getting modules info...');
const modules = fs.readdirSync(path.join(__dirname, 'modules'));
const modulesInfo = {};
modules.map(module => modulesInfo[module] = require(path.join(__dirname, 'modules', module, 'module.json')));
fs.writeJSONSync(path.join(__dirname, 'etc', 'modules.json'), modulesInfo);
const linguiUser = fs.readJSONSync('./.linguirc-user');
const linguiPathsArrUser = modules.map(module => `modules/${module}/frontend/components/user/`);
linguiUser.srcPathDirs = ['shared/components/', ...linguiPathsArrUser];
fs.writeJSONSync('./.linguirc-user', linguiUser, {
    spaces: 2
});
const linguiAdmin = fs.readJSONSync('./.linguirc-admin');
const linguiPathsArrAdmin = modules.map(module => `modules/${module}/frontend/components/admin/`);
linguiAdmin.srcPathDirs = ['shared/components/', ...linguiPathsArrAdmin];
fs.writeJSONSync('./.linguirc-admin', linguiAdmin, {
    spaces: 2
});
console.log('Staring Webpack...');
module.exports = webpackConfig;
