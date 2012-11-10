define([
	'jquery',
	'lodash',
	'backbone'
	], function ($, _, Backbone) {

		var ResultView = Backbone.View.extend({

			template: 'result',

			tagName: 'div',

			data: function () {
				return this.model.toJSON();
			}

		});

		return ResultView;
	});
