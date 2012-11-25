define([
  'jquery',
  'lodash',
  'backbone',
  'modules/solrita/views/num',
  'modules/solrita/views/sort'
  ], function ($, _, Backbone, NumView, SortView) {

    var ResultsHeaderView = Backbone.View.extend({

      template: 'results-header',

      initialize: function (options) {
        this.collection.on('reset', this.render, this);
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

      data: function () {
        return this.collection.infoSolr;
      },

      cleanup: function () {
        this.collection.off(null, null, this);
      }



    });

    return ResultsHeaderView;
  });
