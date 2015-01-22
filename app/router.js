define([
  "jquery",
  "lodash",
  "backbone",
  "app",
  "modules/solrita",
  "views/main"
], function($, _, Backbone, app, Solrita, MainView) {

  var AppRouter = Backbone.Router.extend({

    collection: {},

    initialize: function(options) {
        this.collection = options.collection;
        this.initLayout();
    },

    routes: {
      "search?*params": "searchAction",
      "": "defaultAction"
    },

    defaultAction: function(actions) {
      this.reset();
      this.collection.query = app.defaultQuery;
      this.collection.facetQueries = [];
      this.collection.search();
    },

    searchAction: function(params) {
      this.reset();
      params = this._getParamsFromArguments(arguments);
      this.collection.query = this._getQueryFromParams(params);
      this.collection.state.perPage = this._getNumFromParams(params);
      var start = this._getStartFromParams(params);
      this.collection.state.currentPage = 0;
      if (start !== 0) {
        this.collection.state.currentPage = Math.floor(start / this.collection.state.perPage);
      }
      var facetQueries = this._getFacetQueriesFromParams(params);
      this.collection.facetQueries = facetQueries;
      this.collection.search();
    },

    initLayout: function() {
      var mainView = new MainView({collection: this.collection});
      mainView.render();
    },

    _getQueryFromParams: function(params) {
      var queryParam = params.q;
      if (queryParam === undefined || queryParam === "") {
        queryParam = app.defaultQuery;
      }
      return unescape(queryParam);
    },

    _getStartFromParams: function(params) {
      var startParam = params.start;
      if (startParam === undefined) {
        startParam = 0;
      }
      return startParam;
    },

    _getNumFromParams: function(params) {
      var numParam = params.num;
      if (numParam === undefined) {
        numParam = app.defaultPerPage;
      }
      return numParam;
    },

    _getFacetQueriesFromParams: function(params) {
      var facetQueriesArray = [];
      var facetQueriesParam = params.fq;
      if (facetQueriesParam !== undefined) {
        if (_.isArray(facetQueriesParam)) {
          facetQueriesArray = facetQueriesParam;
        } else {
          facetQueriesArray.push(facetQueriesParam);
        }
      }
      return facetQueriesArray;
    },

    _getParamsFromArguments: function(args) {
      var paramString = args[0];
      var result = {};
      if (!paramString) {
        return result;
      }
      $.each(paramString.split("&"), function(index, value) {
        if (value) {
          var param = value.split("=");
          var key = param[0];
          if (key.lastIndexOf("?", 0) === 0) {
            key = key.substring(1, key.lenght);
          }
          value = param[1];
          var currentValue = result[key];
          if (currentValue === undefined) {
            result[key] = value;
          } else if (_.isArray(currentValue)) {
            currentValue.push(value);
          } else {
            result[key] = [currentValue, value];
          }
        }
      });
      return result;
    },

    reset: function() {
      if (this.collection.length) {
        this.collection.reset();
      }
    }

  });

  return AppRouter;

});
