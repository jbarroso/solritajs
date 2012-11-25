// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["main"],

  paths: {
    // JavaScript folders.
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",
    vendor: "../assets/vendor",

    // Libraries.
    jquery: "../assets/js/libs/jquery",
    lodash: "../assets/js/libs/lodash",
    backbone: "../assets/js/libs/backbone"
  },

  shim: {
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    },
    "plugins/backbone.layoutmanager": ["backbone"],
    "plugins/backbone.paginator": ["backbone"],

    // Twitter Bootstrap depends on jQuery.
    "vendor/bootstrap/js/bootstrap": ["jquery"],
    // spinjs: http://fgnass.github.com/spin.js/
    "plugins/spin": []
  }

});
