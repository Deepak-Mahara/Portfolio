const { override, addWebpackPlugin } = require('customize-cra');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = override(
  addWebpackPlugin(
    new CopyWebpackPlugin({
      patterns: [
        { from: 'node_modules/pdfjs-dist/build/pdf.worker.min.mjs', to: 'pdf.worker.min.mjs' },
      ],
    })
  )
);
