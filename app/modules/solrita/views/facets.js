define([
  "jquery",
  "lodash",
  "backbone",
  "ldsh!../templates/facets"
  ], function ($, _, Backbone, template) {

  var FacetsView = Backbone.View.extend({

    template: template,

    initialize: function () {
      this.listenTo(this.collection, "reset sync request error", this.render);
    },

    serialize: function () {
      return this.collection;
    }

  });

  return FacetsView;

});
