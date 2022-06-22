const path = require('path');
module.exports = {
  mode: "production", // could be "production" as well
  entry: './js/index.js', 
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js' 
  }
};