define([
  "jquery",
  "lodash",
  "backbone",
  "app",
  "ldsh!../templates/search"
  ], function ($, _, Backbone, app, template) {

    var SearchView = Backbone.View.extend({

      template: template,

      initialize: function () {
        _.bindAll(this, "search", "getQuery");
        this.listenTo(this.collection, "reset sync request error", this.render);
      },

      serialize: function () {
        return this.collection.infoSolr;
      },

      events: {
        "submit #search-form": "search"
      },

      search: function (e) {
        e.preventDefault();
        var query = this.getQuery();
        this.collection.query = query;
        this.collection.currentPage = 0;
        this.collection.reset();
        this.collection.search();
      },

      getQuery: function () {
        var query = $("#search-query").val();
        if (!query) query = app.defaultQuery;
        return query;
      }

    });

    return SearchView;
  });
