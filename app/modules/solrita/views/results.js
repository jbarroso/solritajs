define([
	'jquery',
	'lodash',
	'backbone',
	'modules/solrita/views/result'
	], function ($, _, Backbone, ResultView) {

		var ResultsView = Backbone.View.extend({

			initialize: function () {
				this.collection.on('reset', this.render, this);
			},

			beforeRender: function () {
				var self = this;
				this.collection.each(function (item) {
					self.insertView(new ResultView({
						model: item
					}));
				});
			}

		});

		return ResultsView;
	});
