define([
  "jquery",
  "lodash",
  "backbone",
  "modules/solrita/views/num",
  "modules/solrita/views/sort",
  "ldsh!../templates/results-header"

  ], function ($, _, Backbone, NumView, SortView, template) {

    var ResultsHeaderView = Backbone.View.extend({

      template: template,

      initialize: function (options) {
        this.listenTo(this.collection, "sync", this.render);
      },

      beforeRender: function () {
        this.insertViews({
          "#num": new NumView({
            collection: this.collection
          }),
          "#sort": new SortView({
            collection: this.collection
          })
        });
      },

      serialize: function () {
        return this.collection.infoSolr;
      }

    });

    return ResultsHeaderView;
  });
