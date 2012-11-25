define([
  'jquery',
  'lodash',
  'backbone',
  'modules/solrita/views/result',
  'plugins/spin'
  ], function ($, _, Backbone, ResultView, Spinner) {

    var ResultsView = Backbone.View.extend({

      spinner: {},

      initialize: function () {
        this.collection.on('reset', this.render, this);
        this.collection.on('fetch', this.start, this);
        this.collection.on('parse', this.stop, this);
        this.spinner = new Spinner({
          color: "#777"
        });
      },

      beforeRender: function () {
        var self = this;
        this.collection.each(function (item) {
          self.insertView(new ResultView({
            model: item
          }));
        });
      },

      start: function () {
        this.spinner.spin(this.el);
      },

      stop: function () {
        this.spinner.stop();
      },

      cleanup: function () {
        this.collection.off(null, null, this);
      }

    });

    return ResultsView;
  });
