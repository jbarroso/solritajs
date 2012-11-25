define([
  'jquery',
  'lodash',
  'backbone'
  ], function ($, _, Backbone) {

  var FacetsView = Backbone.View.extend({

    template: 'facets',

    initialize: function () {
      this.collection.on('reset', this.render, this);
    },

    data: function () {
      return this.collection;
    }

  });

  return FacetsView;

});
