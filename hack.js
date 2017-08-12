process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const webpackDevConfig = require('react-scripts/config/webpack.config.dev');

// Make any modifications you want to config here, they'll be picked up by CRA

webpackDevConfig.plugins.push({
  apply(compiler) {
    compiler.plugin("done", () => {
      setTimeout(
        () => {
          console.log("********************");
          console.log("I'm inside the house");
          console.log("********************");
        },
        2000
      );
    });
  }
});
