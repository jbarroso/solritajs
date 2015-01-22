define([
  "jquery",
  "lodash",
  "backbone",
  "ldsh!../templates/pagination"
  ], function ($, _, Backbone, template) {

    var PaginatedView = Backbone.View.extend({

      template: template,

      initialize: function () {
        this.listenTo(this.collection, "reset sync request error", this.render);
      },

      serialize: function () {
        return this.collection.infoSolr;
      }

    });

    return PaginatedView;
  });
