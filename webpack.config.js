const fs = require('fs-extra');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const webpackConfig = {
    entry: {},
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'static', 'admin'),
        publicPath: '/admin/',
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
                    test: /[\\/](node_modules|shared)[\\/]/,
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
            filename: '[name].css',
            chunkFilename: '[name].css',
            orderWarning: true
        }),
        new CleanWebpackPlugin({
            verbose: true,
            cleanOnceBeforeBuildPatterns: ['admin']
        })
    ]
};

const modules = fs.readdirSync(path.join(__dirname, 'modules'));

const modulesInfo = {};

for (const module of modules) {
    const meta = require(path.join(__dirname, 'modules', module, 'module.json'));
    modulesInfo[module] = meta;
}

fs.writeJSONSync(path.join(__dirname, 'etc', 'modules.json'), modulesInfo);

for (const module of modules) {
    webpackConfig.entry[module] = path.resolve(__dirname, 'modules', module, 'src', 'backend.jsx');
    webpackConfig.plugins.push(new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, 'static', 'admin', module, 'index.html'),
        chunks: [module, 'styles', 'vendors'],
        template: path.resolve(__dirname, 'src', 'backend.html')
        // minify: {
        //     collapseWhitespace: true,
        //     removeComments: true,
        //     removeRedundantAttributes: true,
        //     removeScriptTypeAttributes: true,
        //     removeStyleLinkTypeAttributes: true,
        //     useShortDoctype: true
        // }
    }));
}

module.exports = webpackConfig;
