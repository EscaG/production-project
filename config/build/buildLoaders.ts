import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/config';

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const typeScriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const scssLoader = {
		test: /\.(s[ac]ss|css)$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:8]',

					},
				},
			},
			'sass-loader',
		],
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif|webp|woff|woff2|ttf)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	return [
		fileLoader,
		svgLoader,
		typeScriptLoader,
		scssLoader,
	];
}