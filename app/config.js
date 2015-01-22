require.config({
  paths: {
    "underscore": "../bower_components/lodash/dist/lodash.underscore",
    "lodash": "../bower_components/lodash/dist/lodash",
    "ldsh": "../bower_components/lodash-template-loader/loader",
    "jquery": "../bower_components/jquery/dist/jquery",
    "backbone": "../bower_components/backbone/backbone",
    "layoutmanager": "../bower_components/layoutmanager/backbone.layoutmanager",
    "backbone.paginator": "../bower_components/backbone.paginator/lib/backbone.paginator",
    "spin": "../bower_components/spin.js/spin",
    "sinon": "../bower_components/sinonjs/sinon",
    "specs": "../test/jasmine/spec"
  },
  shim: {
    "sinon": {
      exports: "sinon"
    }
  },
  deps: ["main"]
});
