define([
  "jquery",
  "lodash",
  "backbone",
  "../modules/solrita",
  "ldsh!../templates/main"
], function($, _, Backbone, Solrita, template) {

  var MainView = Backbone.View.extend({
    template: template,
    el: "#main",
    initialize: function(options) {
      this.setView("#search", new Solrita.Views.SearchView({
        collection: this.collection
      }));
      this.setView("#results-header", new Solrita.Views.ResultsHeaderView({
        collection: this.collection
      }));
      this.setView("#results", new Solrita.Views.ResultsView({
        collection: this.collection
      }));
      this.setView("#facets", new Solrita.Views.FacetsView({
        collection: this.collection
      }));
      this.setView("#filters", new Solrita.Views.FiltersView({
        collection: this.collection
      }));
      this.setView("#pagination", new Solrita.Views.PaginationView({
        collection: this.collection
      }));
    }
  });

  return MainView;
});
