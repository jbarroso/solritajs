define([
  'jquery',
  'lodash',
  'backbone',
  'app',
  'modules/solrita/views/option'
  ], function ($, _, Backbone, app, OptionView) {

    var NumView = Backbone.View.extend({

      tagName: "select",

      initialize: function (options) {
        _.bindAll(this, "numSelected");
      },

      events: {
        "change": "numSelected"
      },

      beforeRender: function () {
        var self = this;
        $(app.perPageArray).each(function (num, item) {
          self.insertView(new OptionView({
            name: item,
            value: item
          }));
        });
        this.$el.addClass("input-mini");
      },

      afterRender: function () {
        this.$el.val(this.collection.perPage);
      },

      numSelected: function (e) {
        e.preventDefault();
        var per = $(e.target).val();
        this.collection.perPage = per;

        Backbone.history.navigate("search?" + this.collection.getCurrentParams(), true);
      }

    });

    return NumView;
  });
