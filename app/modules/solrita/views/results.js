define([
  "jquery",
  "lodash",
  "backbone",
  "modules/solrita/views/result",
  "spin"
  ], function ($, _, Backbone, ResultView, Spinner) {

    var ResultsView = Backbone.View.extend({

      spinner: {},

      initialize: function () {
        this.listenTo(this.collection, "reset sync", this.render);
        this.listenTo(this.collection, "request", this.start);
        this.listenTo(this.collection, "sync error", this.stop);
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
      }
        
    });

    return ResultsView;
  });
