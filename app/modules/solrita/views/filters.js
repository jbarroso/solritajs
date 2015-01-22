define([
  "jquery",
  "lodash",
  "backbone",
  "ldsh!../templates/filters"
  ], function ($, _, Backbone, template) {

    var FiltersView = Backbone.View.extend({

      template: template,

      initialize: function () {
        this.listenTo(this.collection, "reset sync request error", this.render);
      },

      events: {
        "click .rfq": "removeFilter"
      },

      removeFilter: function (e) {
        e.preventDefault();
        var filterQuery = $(e.target).attr("id");
        this.collection.removeFacetQuery(filterQuery);
        this.collection.search();
        Backbone.history.navigate("search?" + this.collection.getCurrentParams(), true);
      },

      serialize: function () {
        return this.collection;
      }

    });

    return FiltersView;
  });
