define([
  "jquery",
  "lodash",
  "backbone",
  "app",
  "modules/solrita/views/option"
  ], function ($, _, Backbone, app, OptionView) {

    var SortView = Backbone.View.extend({

      tagName: "select",

      initialize: function (options) {
        _.bindAll(this, "sortFieldSelected");
      },

      events: {
        "change": "sortFieldSelected"
      },

      beforeRender: function () {
        var self = this;
        $(app.sortFieldArray).each(function (num, item) {
          self.insertView(new OptionView({
            name: item,
            value: item
          }));
        });
        this.$el.addClass("input-medium");
      },

      afterRender: function () {
        this.$el.val(this.collection.state.sortField);
      },

      sortFieldSelected: function (e) {
        e.preventDefault();
        var sortFieldSelected = $(e.target).val();
        this.collection.state.sortField = sortFieldSelected;

        Backbone.history.navigate("search?" + this.collection.getCurrentParams(), true);
      }

    });

    return SortView;
  });
