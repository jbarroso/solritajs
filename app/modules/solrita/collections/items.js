define([
	'jquery',
	'lodash',
	'backbone',
	'modules/solrita/models/item',
	'app',
	'plugins/backbone.paginator'
	], function ($, _, Backbone, model, app) {

		var SolrPaginatedCollection = Backbone.Paginator.requestPager.extend({

			initialize: function () {
				this.facetFields = app.defaultFacetFieldsArray;
				this.facetQueries = [];
				this.facetCounts = {};
			},

			model: model,

			paginator_core: {
				url: app.solrURL,
				jsonp: 'json.wrf'
			},

			paginator_ui: {
				firstPage: 0,
				currentPage: 0,
				perPage: app.defaultPerPage,
				sortField: app.defaultSortField
			},

			server_api: {
				'q': function () {
					return this.query;
				},
				'rows': function () {
					return this.perPage;
				},
				'start': function () {
					return this.currentPage * this.perPage;
				},
				'sort': function () {
					return this.sortField;
				},
				'wt': 'json',
				'facet': 'true',
				'facet.mincount': 1,
				'facet.field': function () {
					return this.facetFields;
				},
				'fq': function () {
					return this.facetQueries;
				},
				'hl': function () {
					return true;
				},
				'hl.fl': function () {
					return '*';
				}
			},

			query: app.defaultQuery,

			total: 0,

			solrStatus: 0,

			qTime: 0,

			facetFields: app.defaultFacetFieldsArray,

			facetQueries: [],

			facetCounts: {},

			infoSolr: {
				total: 0,
				printQuery: ''
			},

			parse: function (response) {
				this.total = response.response.numFound;
				this.totalPages = Math.ceil(this.total / this.perPage);
				this.solrStatus = response.responseHeader.status;
				this.qTime = response.responseHeader.QTime;
				this.facetCounts = response.facet_counts;
				this.infoSolr = this.getInfoSolr();
				var docs = this._getDocsWithValueAndValuehl(response.response.docs, response.highlighting);
				return docs;
			},

			_getDocsWithValueAndValuehl: function (docs, highlighting) {
				$.each(docs, function (nDoc, doc) {
					var id = doc.id;
					$.each(doc, function(field, value) {
						var valuehl = value;
						if (highlighting[id][field]!==undefined){
							valuehl = highlighting[id][field][0];
						}
						var newValue = {value: value, valuehl: valuehl};
						if (field!=="id"){
							doc[field] = newValue;
						}
					});
				});
				return docs;
			},

			getInfoSolr: function () {
				var info = this.info();
				info.qTime = this.qTime;
				info.total = this.total;
				info.query = this.query;
				info.printQuery = (this.query !== app.defaultQuery) ? this.query : '';
				// I use _.escape because it changes " to &quote;
				// This is necessary to put the value in the search's input text
				info.printQuery = _.escape(info.printQuery);
				info.currentParams = this.getCurrentParams();
				info.startRecord = this.currentPage * this.perPage;
				info.beginIndex = Math.max(0, this.currentPage - app.paginationSize);
				info.endIndex = Math.min(info.beginIndex + (app.paginationSize * 2), info.totalPages);
				if (info.firstPage === undefined) {
					info.firstPage = 0;
				}
				info.searchBase = "search?"+ info.currentParams;
				info.isFirstPage = (info.firstPage===info.currentPage);
				info.isLastPage = (info.currentPage+1===info.totalPages);

				return info;
			},

			removeFacetQuery: function (facetQuery) {
				var index = $.inArray(facetQuery, this.facetQueries);
				if (index != -1) {
					this.facetQueries.splice(index, (this.facetQueries.length - index));
				}
			},

			search: function (options) {
				if (!_.isObject(options)) {
					options = {};
				}
				return this.pager(options);
			},

			getCurrentParams: function () {
				var params, sQuery = '';
				if (this.query !== '' && this.query !== app.defaultQuery) {
					sQuery = escape(this.query);
				}
				params = 'q=' + sQuery;
				$.each(this.facetQueries, function (index, value) {
					params = params + '&';
					params = params + 'fq=' + value;
				});
				if (this.perPage !== undefined && this.perPage !== app.defaultPerPage) {
					params = params + '&num=' + this.perPage;
				}
				if (this.sortField !== undefined && this.sortField !== app.defaultSortField) {
					params = params + '&sort=' + this.sortField;
				}
				return params;
			}
		});

		return SolrPaginatedCollection;

	});
