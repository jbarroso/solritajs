define(['modules/solrita', 'app'], function (Solrita, app) {

	describe("SolrPaginatedColecction and Solr integration", function () {

		it("collection should be fetched from solr", function () {
			var parseCallback = jasmine.createSpy();
			var solrPaginatedCollection = new Solrita.SolrPaginatedCollection();
			solrPaginatedCollection.on("reset", function () {
				parseCallback();
			});
			solrPaginatedCollection.fetch();
			waitsFor(function () {
				return parseCallback.callCount > 0;
			});
			runs(function () {
				expect(parseCallback).toHaveBeenCalled();
				expect(solrPaginatedCollection.length).toEqual(app.defaultPerPage);
				expect(solrPaginatedCollection.facetCounts).toBeDefined();
			});

		});

	});
});
