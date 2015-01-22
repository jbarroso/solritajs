define([
  "jquery",
  "lodash",
  "backbone",
  "ldsh!../templates/result"
  ], function ($, _, Backbone, template) {

    var ResultView = Backbone.View.extend({

      template: template,

      tagName: "div",

      serialize: function () {
        return this.model.toJSON();
      }

    });

    return ResultView;
  });
