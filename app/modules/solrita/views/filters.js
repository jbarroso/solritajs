define([
	'jquery',
	'lodash',
	'backbone'
	], function ($, _, Backbone) {

		var FiltersView = Backbone.View.extend({

			template: 'filters',

			initialize: function () {
				this.collection.on('reset', this.render, this);
			},

			events: {
				'click .rfq': 'removeFilter'
			},

			removeFilter: function (e) {
				e.preventDefault();
				var filterQuery = $(e.target).attr("id");
				this.collection.removeFacetQuery(filterQuery);
				this.collection.search();
				Backbone.history.navigate("search?" + this.collection.getCurrentParams(), true);
			},

			data: function () {
				return this.collection;
			}
		});

		return FiltersView;
	});
