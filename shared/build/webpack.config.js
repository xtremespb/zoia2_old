/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs-extra');
const path = require('path');
const webpack = require('webpack');
const MarkoPlugin = require('@marko/webpack/plugin').default;
const CSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const markoPlugin = new MarkoPlugin();

const configTools = {
    name: 'Zoia Tools',
    entry: {
        app: `${__dirname}/../api/tools.js`
    },
    output: {
        path: `${__dirname}/../../bin`,
        filename: 'tools.js'
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
            test: /\.js?$/,
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

const configAdmin = {
    name: 'Admin Panel (React)',
    entry: {
        app: path.resolve(__dirname, '..', 'components', 'entrypoint.jsx')
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '..', '..', 'static', 'data_admin'),
        publicPath: '/data_admin/',
        filename: '[name]_[contenthash:8].js'
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
                    name(module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return `npm.${packageName.replace('@', '')}`;
                    },
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
            filename: '[name]_[contenthash:8].css',
            chunkFilename: '[name]_[contenthash:8].css',
            orderWarning: true
        }),
        new HtmlWebpackPlugin({
            chunksSortMode: 'none',
            filename: path.resolve(__dirname, '..', '..', 'static', 'admin.html'),
            chunks: ['app', 'styles', 'vendors'],
            template: path.resolve(__dirname, '..', 'templates', 'admin.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        })
    ]
};

const configAPI = {
    name: 'API Server',
    entry: {
        app: `${__dirname}/../api/api.js`
    },
    output: {
        path: `${__dirname}/../../bin`,
        filename: 'api.js'
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

const configWebClient = {
    name: 'Web Server - Client Part',
    context: path.resolve(__dirname, '../marko'),
    resolve: {
        extensions: ['.js', '.json', '.marko']
    },
    module: {
        rules: [{
                test: /\.marko$/,
                loader: '@marko/webpack/loader'
            },
            {
                test: /\.(less|css)$/,
                use: [CSSExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.svg/,
                loader: 'svg-url-loader'
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                loader: 'file-loader',
                options: {
                    outputPath: '../client'
                }
            }
        ]
    },
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: 3
        }
    },
    output: {
        filename: '[name].[contenthash:8].js',
        path: path.join(__dirname, '../../static/data_user'),
        publicPath: '/data_user/',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.browser': true
        }),
        new CSSExtractPlugin({
            filename: '[name].[contenthash:8].css'
        }),
        new OptimizeCssAssetsPlugin(),
        markoPlugin.browser
    ]
};

const configWebServer = {
    name: 'Web Server - Server Part',
    context: path.resolve(__dirname, '../marko'),
    resolve: {
        extensions: ['.js', '.json', '.marko']
    },
    module: {
        rules: [{
                test: /\.marko$/,
                loader: '@marko/webpack/loader'
            },
            {
                test: /\.(less|css)$/,
                use: [CSSExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.svg/,
                loader: 'svg-url-loader'
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                loader: 'file-loader',
                options: {
                    outputPath: '../client'
                }
            }
        ]
    },
    target: 'node',
    externals: [/^[^./!]/],
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
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, '../../bin'),
        filename: 'web.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.browser': undefined,
            'process.env.BUNDLE': true
        }),
        new CSSExtractPlugin({
            filename: '[name].[contenthash:8].css'
        }),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        }),
        markoPlugin.server
    ]
};

const webpackConfig = [];

console.log(`This tool will build Zoia for you.`);

if (process.argv.indexOf('--build:admin') > -1) {
    console.log('Build Admin Panel (React) only.');
    webpackConfig.push(configAdmin);
} else if (process.argv.indexOf('--build:api') > -1) {
    console.log('Build API Server only.');
    webpackConfig.push(configAPI);
} else if (process.argv.indexOf('--build:web') > -1) {
    console.log('Build Web Server only.');
    webpackConfig.push(configWebServer, configWebClient);
} else if (process.argv.indexOf('--build:tools') > -1) {
    console.log('Build Tools only.');
    webpackConfig.push(configTools);
} else {
    console.log('Building everything.');
    webpackConfig.push(configAPI, configAdmin, configTools, configWebClient, configWebServer);
}

console.log('');
console.log('Cleaning up...');
fs.ensureDirSync(path.join(__dirname, '..', '..', 'static', 'uploads'));
fs.removeSync(path.join(__dirname, '..', '..', 'static', 'data_admin'));
fs.ensureDirSync(path.join(__dirname, '..', '..', 'static', 'data_admin'));
fs.removeSync(path.join(__dirname, '..', '..', 'static', 'data_user'));
fs.ensureDirSync(path.join(__dirname, '..', '..', 'static', 'data_user'));
console.log('Getting modules info...');
const modules = fs.readdirSync(path.join(__dirname, '..', '..', 'modules'));
const modulesInfo = {};
modules.map(module => modulesInfo[module] = require(path.join(__dirname, '..', '..', 'modules', module, 'module.json')));
console.log('Writing modules.json...');
fs.writeJSONSync(path.join(__dirname, 'modules.json'), modulesInfo);
const linguiAdmin = {
    localeDir: 'shared/locales/admin',
    srcPathDirs: [],
    format: 'po'
};
const linguiPathsArrAdmin = modules.map(module => `modules/${module}/admin/components/`);
linguiAdmin.srcPathDirs = ['shared/components/', ...linguiPathsArrAdmin];
console.log('Writing linguirc.admin.json...');
fs.writeJSONSync(`${__dirname}/linguirc.admin.json`, linguiAdmin, {
    spaces: 2
});
console.log('Staring Webpack...');

module.exports = webpackConfig;
