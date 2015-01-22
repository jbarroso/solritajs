define([
  "jquery",
  "lodash",
  "backbone",
  "modules/solrita/models/item",
  "app",
  "backbone.paginator"
  ], function ($, _, Backbone, model, app) {

    var SolrPaginatedCollection = Backbone.PageableCollection.extend({

      mode: "server",

      url: app.solrURL,

      initialize: function () {
        this.facetFields = app.defaultFacetFieldsArray;
        this.facetQueries = [];
        this.facetCounts = {};
      },

      model: model,
      sync : function (method, collection, options) {
        options.dataType = "jsonp";
        options.jsonp = "json.wrf";
        return Backbone.sync(method, collection, options);
      },
      state: {
        firstPage: 0,
        currentPage: 0,
        perPage: app.defaultPerPage,
        sortField: app.defaultSortField
      },

      queryParams: {
        "q": function () {
          return this.query;
        },
        "rows": function () {
          return this.state.perPage;
        },
        "start": function () {
          return this.state.currentPage * this.state.perPage;
        },
        "sort": function () {
          return this.state.sortField;
        },
        "wt": "json",
        "facet": "true",
        "facet.mincount": 1,
        "facet.field": function () {
          return this.facetFields;
        },
        "fq": function () {
          return this.facetQueries;
        },
        "hl": function () {
          return true;
        },
        "hl.fl": function () {
          return "*";
        },
        "hl.simple.pre": app.hlSimplePre,
        "hl.simple.pro": app.hlSimplePro
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
        printQuery: "",
        noResultsFound: false
      },

      parse: function (response) {
        this.total = response.response.numFound;
        this.totalPages = Math.ceil(this.total / this.state.perPage);
        this.solrStatus = response.responseHeader.status;
        this.qTime = response.responseHeader.QTime;
        this.facetCounts = response.facet_counts;
        this.infoSolr = this.getInfoSolr();
        var docs = this._getDocsWithValueAndValuehl(response.response.docs, response.highlighting);
        this.trigger("parse");
        return docs;
      },

      _getDocsWithValueAndValuehl: function (docs, highlighting) {
        var self = this;
        $.each(docs, function (nDoc, doc) {
          var id = doc.id;
          $.each(doc, function (field, value) {
            if (field !== "id") {
              doc[field] = self._getValuehl(highlighting, id, field, value);
            }
          });
        });
        return docs;
      },

      _getValuehl: function (highlighting, id, field, value) {
        var valuehl = {};
        var hl = highlighting[id][field];
        if (_.isArray(value)) {
          var multipleValuehl = [];
          $.each(value, function (nValue, currentValue) {
            var currentValuehl = currentValue;
            if (hl !== undefined) {
              $.each(hl, function (nValuehl, currenthl) {
                var currenthlNoTags = currenthl.replace(app.hlSimplePre, "").replace(app.hlSimplePro, "");
                if (currentValue === currenthlNoTags) {
                  currentValuehl = currenthl;
                }
              });
            }
            multipleValuehl.push({
              value: currentValue,
              valuehl: currentValuehl
            });
          });
          valuehl = multipleValuehl;
        } else {
          var simpleValuehl = value;
          if (hl !== undefined && hl[0] !== undefined) {
            simpleValuehl = hl[0];
          }
          valuehl = {
            value: value,
            valuehl: simpleValuehl
          };
        }
        return valuehl;
      },

      getInfoSolr: function () {
        var info = {}; //this.info();
        info.currentPage = this.state.currentPage;
        info.perPage = this.state.perPage;
        info.qTime = this.qTime;
        info.total = this.total;
				info.totalPages = this.totalPages;
        info.query = this.query;
        info.printQuery = (this.query !== app.defaultQuery) ? this.query : "";
        // I use _.escape because it changes " to &quote;
        // This is necessary to put the value in the search"s input text
        info.printQuery = _.escape(info.printQuery);
        info.currentParams = this.getCurrentParams();
        info.startRecord = this.state.currentPage * this.perPage;
        info.beginIndex = Math.max(0, this.state.currentPage - app.paginationSize);
        info.endIndex = Math.min(info.beginIndex + (app.paginationSize * 2), info.totalPages);
        if (info.firstPage === undefined) {
          info.firstPage = 0;
        }
        info.searchBase = "search?" + info.currentParams;
        info.isFirstPage = (info.firstPage === this.state.currentPage);
        info.isLastPage = (this.state.currentPage + 1 === info.totalPages);
        info.noResultsFound = (this.total === 0);

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
        return this.fetch(options);
      },

      getCurrentParams: function () {
        var params, sQuery = "";
        if (this.query !== "" && this.query !== app.defaultQuery) {
          sQuery = escape(this.query);
        }
        params = "q=" + sQuery;
        $.each(this.facetQueries, function (index, value) {
          params = params + "&";
          params = params + "fq=" + value;
        });
        if (this.state.perPage !== undefined && this.state.perPage !== app.defaultPerPage) {
          params = params + "&num=" + this.state.perPage;
        }
        if (this.state.sortField !== undefined && this.state.sortField !== app.defaultSortField) {
          params = params + "&sort=" + this.state.sortField;
        }
        return params;
      }
    });

    return SolrPaginatedCollection;

  });
