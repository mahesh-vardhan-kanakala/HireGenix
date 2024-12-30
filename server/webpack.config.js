import path from 'path';
import { createRequire } from 'module';
import HtmlWebpackPlugin from 'html-webpack-plugin'; // Import the plugin

const require = createRequire(import.meta.url);

export default {
  entry: './src/index.js', // Entry point of your application

  output: {
    path: path.resolve('dist'), // Output directory
    filename: 'bundle.js', // Bundled file name
    clean: true, // Clean the output directory before each build
  },

  mode: 'production', // Set mode to 'production' for optimized builds

  resolve: {
    extensions: ['.js', '.json'], // Automatically resolve these extensions
    fallback: {
      util: require.resolve('util/'), // Fallback for Node.js modules
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/, // Use Babel for JS files
        exclude: /node_modules/, // Exclude dependencies
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Transpile ES6+ to ES5
          },
        },
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'], // Apply these loaders in order
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Process image files
        type: 'asset/resource', // Handle images as assets
      },
      // Additional rules for other assets (fonts, videos, etc.)
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Handle fonts
        type: 'asset/inline', // Inlines fonts
      },
      {
        test: /\.(mp4|webm|ogg|mp3)$/, // Handle media files
        type: 'asset/resource', // As resources
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your HTML template
      filename: 'index.html', // Output HTML file name
      inject: 'body', // Inject scripts into the body
    }),
  ],

  devtool: 'source-map', // Generate source maps for debugging

  devServer: {
    static: {
      directory: path.resolve('dist'), // Serve files from the output directory
    },
    port: 3000, // Port for the development server
    open: true, // Automatically open the browser
    hot: true, // Enable hot module replacement
    compress: true, // Enable gzip compression
    historyApiFallback: true, // Handle React Router refreshes
  },
};
