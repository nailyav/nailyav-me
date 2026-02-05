import { resolve, join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildEnv } from './config/build/config';

export default (env: BuildEnv) => {
    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDev = mode === 'development';

    const plugins = [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'public', 'index.html'),
        }),
        new Dotenv(),
        new webpack.ProgressPlugin(),
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    if (!isDev) {
        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
                analyzerPort: 8885,
                analyzerMode: isDev ? 'server' : 'static',
            })
        );
    }

    return {
        entry: {
            index: resolve(__dirname, 'src', 'index.tsx'),
        },
        output: {
            path: resolve(__dirname, 'build'),
            publicPath: isDev ? '/' : './',
        },
        mode: mode,
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(c|sa|sc)ss$/i,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                                    localIdentName: isDev
                                        ? '[path][name]__[local]--[hash:base64:5]'
                                        : '[hash:base64:8]',
                                    namedExport: false,
                                    exportLocalsConvention: 'as-is',
                                },
                            },
                        },
                        'sass-loader',
                    ],
                },
            ],
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        plugins,
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                shared: resolve(__dirname, './src/shared/index'),
                widgets: resolve(__dirname, './src/widgets/index'),
                pages: resolve(__dirname, './src/pages/index'),
                entities: resolve(__dirname, './src/entities/index'),
                features: resolve(__dirname, './src/features/index'),
                app: resolve(__dirname, './src/app/index'),
            },
        },

        devServer: {
            port: PORT,
            open: true,
            hot: true,
            compress: true,
            historyApiFallback: true,
            allowedHosts: 'all',
            client: {
                overlay: {
                    errors: true,
                    warnings: true,
                },
            },
        },
    };
};
