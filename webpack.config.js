import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import nodeExternals from 'webpack-node-externals'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	mode: 'production',
	target: 'node',
	externals: [nodeExternals()],
	externalsPresets: {
		node: true
	},
	experiments: {
		topLevelAwait: true,
	},
	entry: path.join(__dirname, '/src/index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'build.[chunkhash].js'
	},
	devServer: {
		port: 7000
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '/public/index.html'),
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '/public/books.html'),
			filename: 'books.html'
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '/public/employees.html'),
			filename: 'employees.html'
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '/public/positions.html'),
			filename: 'positions.html'
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '/public/customers.html'),
			filename: 'customers.html'
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '/public/purchases.html'),
			filename: 'purchases.html'
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '/public/receipts.html'),
			filename: 'receipts.html'
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '/public/suppliers.html'),
			filename: 'suppliers.html'
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(js|mjs|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins: ['@babel/plugin-syntax-top-level-await'],
					}
				}
			}
		]
	}
}