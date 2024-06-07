module.exports = {
    // Other webpack configuration options...
  
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images', // Output path for the images
              },
            },
          ],
        },
      ],
    },
  };
  