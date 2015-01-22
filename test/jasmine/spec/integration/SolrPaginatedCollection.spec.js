define(['modules/solrita', 'app'], function(Solrita, app) {

  describe("SolrPaginatedCollection", function() {

    it("should be fetched from solr", function(done) {
      var solrPaginatedCollection = new Solrita.SolrPaginatedCollection();

      solrPaginatedCollection.fetch({
        success: function(collection, response, options) {
          expect(collection.length).toEqual(app.defaultPerPage);
          expect(collection.facetCounts).toBeDefined();
          done();
        },
        error: function(collection, response, options) {
          console.log(response);
        }
      });
    });
  });
});
