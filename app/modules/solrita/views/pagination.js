define([
  'jquery',
  'lodash',
  'backbone'
  ], function ($, _, Backbone) {

    var PaginatedView = Backbone.View.extend({

      template: 'pagination',

      initialize: function () {
        this.collection.on('reset', this.render, this);
      },

      data: function () {
        return this.collection.infoSolr;
      },

      cleanup: function () {
        this.collection.off(null, null, this);
      }

    });

    return PaginatedView;
  });
