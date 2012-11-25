define([
  'jquery',
  'lodash',
  'backbone'
  ], function ($, _, Backbone) {

    var OptionView = Backbone.View.extend({

      tagName: "option",

      name: "",

      value: "",

      initialize: function (options) {
        this.name = options.name;
        this.value = options.value;
      },

      beforeRender: function () {
        $(this.el).attr('value', this.value).html(this.name);
      }

    });

    return OptionView;
  });
