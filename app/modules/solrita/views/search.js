define([
	'jquery',
	'lodash',
	'backbone',
	'app'
	], function ($, _, Backbone, app) {

		var SearchView = Backbone.View.extend({

			template: 'search',

			initialize: function () {
				_.bindAll(this, 'search', 'getQuery');
			},

			data: function () {
				return this.collection.infoSolr;
			},

			events: {
				'submit #search-form': 'search'
			},

			search: function (e) {
				e.preventDefault();
				var query = this.getQuery();
				this.collection.query = query;
				this.collection.currentPage = 0;
				this.collection.search();
			},

			getQuery: function () {
				var query = $('#search-query').val();
				if (!query) query = app.defaultQuery;
				return query;
			}

		});

		return SearchView;
	});
