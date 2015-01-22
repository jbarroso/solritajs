define([
	'jquery',
	'lodash',
	'backbone'
	], function ($, _, Backbone) {

		describe("Backbone Collection and Solr integration", function () {
      jasmine.DEFAULT_TIMEOUT_INTERVAL= 10000;

			it("collection should be fetched from solr", function (done) {
				var SolrModel = Backbone.Model.extend();
				var SolrCollection = Backbone.Collection.extend({
					model: SolrModel,
					//url: 'http://solritajs-server.herokuapp.com/solr/select?wt=json&json.wrf=?',
					url: 'http://localhost:8983/solr/select?wt=json&json.wrf=?',
					query: '*:*',
					start: 0,
					rows: 10,
					total: 0,
					solrStatus: 0,
					sync: function (method, model, options) {
						options.data = {
							'q': this.query,
							'start': this.start,
							'rows': this.rows
						};
						//options.dataType = 'jsonp'; (not necessary with ? in url)
						//options.jsonp = 'json.wrf'; (not necessary with ? in url)
						return Backbone.sync(method, model, options);
					},
					parse: function (response) {
						this.total = response.response.numFound;
						this.solrStatus = response.responseHeader.status;
						return response.response.docs;
					}
				});
				var response = new SolrCollection();
				response.fetch({
          success: function(collection, response, options) {
            expect(collection.total).toBeGreaterThan(0);
            expect(collection.length).toEqual(10);
            done();
          }
        });
			});

		});
	});
