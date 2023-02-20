const withPlugins = require('next-compose-plugins');

const withImages = require('next-images');

const withVideos = require('next-videos');

const withFonts = require('next-fonts');

// next.config.js
module.exports = withPlugins([withImages, withVideos, withFonts], {
	images: {
		domains: ['images.unsplash.com', 'static.nike.com'],
	},
	plugins: ['postcss-import', 'tailwindcss', 'autoprefixer'],
	serverRuntimeConfig: {
		// Will only be available on the server side
		mySecret: 'secret',
		secondSecret: process.env.SECOND_SECRET, // Pass through env variables
	},
	publicRuntimeConfig: {
		// Will be available on both server and client
		staticFolder: '/public',
	},
	target: 'serverless',
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			},
			{
				test: /\.jsx?$/,
				use: ['babel-loader', 'astroturf/loader'],
			},
			{
				test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
				loader: 'url-loader?limit=100000',
			},
			{
				test: /\.(eot|woff|woff2|otf|ttf|svg|png|jpg|gif|webm)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000,
						name: '[name].[ext]',
					},
				},
			},
			{
				test: /\.mp4$/,
				use: 'file-loader?name=videos/[name].[ext]',
			},
			{
				test: /\.style.js$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: { importLoaders: 1 },
					},
					{
						loader: 'postcss-loader',
						options: { parser: 'sugarss', exec: true },
					},
				],
			},
		],
	},
});
