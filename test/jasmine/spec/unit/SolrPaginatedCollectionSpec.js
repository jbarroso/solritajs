define(['modules/solrita', 'app'], function (Solrita, app) {
  describe("SolrPaginatedCollection Unit Spec", function () {
    describe("With Stub", function () {
      describe("With all records found", function () {
        beforeEach(function () {
          this.paginatedCollection = new Solrita.SolrPaginatedCollection();
          this.jsonout = loadJson("solr-all.json");
          this.ajaxStub = sinon.stub(jQuery, "ajax");
          this.ajaxStub.yieldsTo("success", this.jsonout);
          this.paginatedCollection.fetch();
        });
        afterEach(function () {
          this.ajaxStub.restore();
        });
        it("should be fetched", function () {
          expect(this.paginatedCollection.length).toEqual(10);
        });
        it("should has info", function () {
          expect(this.paginatedCollection.info()).toBeDefined();
        });
        it("should has qTime", function () {
          expect(this.paginatedCollection.qTime).toBeGreaterThan(0);
        });
        it("should has qTime in infoSolr", function () {
          var infoSolr = this.paginatedCollection.infoSolr;
          expect(infoSolr.qTime).toBeDefined();
        });
        it("should has totalPages greater than zero", function () {
          var infoSolr = this.paginatedCollection.infoSolr;
          expect(infoSolr.totalPages).toBeGreaterThan(0);
        });
        it("should has beginIndex in infoSolr", function () {
          var infoSolr = this.paginatedCollection.infoSolr;
          expect(infoSolr.beginIndex).toEqual(0);
        });
        it("should has endIndex in infoSolr", function () {
          var infoSolr = this.paginatedCollection.infoSolr;
          var endIndexExpected = Math.min((app.paginationSize * 2), infoSolr.totalPages);
          expect(infoSolr.endIndex).toEqual(endIndexExpected);
        });
        it("should has facetCounts", function () {
          expect(this.paginatedCollection.facetCounts).toBeDefined();
        });
        it("should has default facet.field array", function () {
          facetFields = _.bind(
          this.paginatedCollection.server_api['facet.field'], this.paginatedCollection);
          expect(facetFields()).toEqual(app.defaultFacetFieldsArray);
        });
        it("should has empty facetQueries", function () {
          expect(this.paginatedCollection.facetQueries.length).toEqual(0);
        });
        it("should be able to remove one facet query", function () {
          this.paginatedCollection.facetQueries = ["foo:bar"];
          this.paginatedCollection.removeFacetQuery("foo:bar");
          expect(this.paginatedCollection.facetQueries.length).toEqual(0);
        });
        it("should remove all the facet queries when the first one is removed", function () {
          this.paginatedCollection.facetQueries = ["foo:bar", "duh:yow"];
          this.paginatedCollection.removeFacetQuery("foo:bar");
          expect(this.paginatedCollection.facetQueries.length).toEqual(0);
        });
        it("should remove all the followings facet queries when one is removed", function () {
          var expectedFacetQueries = ["foo:bar"];
          this.paginatedCollection.facetQueries = ["foo:bar", "duh:yow", "yeah:right"];
          this.paginatedCollection.removeFacetQuery("duh:yow");
          expect(this.paginatedCollection.facetQueries).toEqual(expectedFacetQueries);
        });
      });

      describe("With Search and Highlighting", function () {
        beforeEach(function () {
          this.paginatedCollection = new Solrita.SolrPaginatedCollection();
          this.jsonout = loadJson("solr-search-hl.json");
          this.ajaxStub = sinon.stub(jQuery, "ajax");
          this.ajaxStub.yieldsTo("success", this.jsonout);
          this.paginatedCollection.fetch();
        });
        afterEach(function () {
          this.ajaxStub.restore();
        });
        it("should be fetched", function () {
          expect(this.paginatedCollection.length).toEqual(2);
        });
        it("should has a record with a name value", function () {
          expect(this.paginatedCollection.models[0].get("name").value).toEqual("Solr, the Enterprise Search Server");
        });
        it("should has a record with a name valuehl", function () {
          expect(this.paginatedCollection.models[0].get("name").valuehl).toEqual("<em>Solr</em>, the Enterprise Search Server");
        });
        it("should has a record with a hl multiple field name/valuehl (cat)", function () {
          var cats = this.paginatedCollection.models[0].get["cat"];
          var value = "software";
          var nameValue = {
            value: value,
            valuehl: value
          };
          expect(_.contains(cats, nameValue));
        });

        it("should has a record with a hl multiple field name/valuehl (features)", function () {
          var features = this.paginatedCollection.models[0].get["features"];
          var value = "Scalability - Efficient Replication to other Solr Search Servers";
          var valuehl = "Scalability - Efficient Replication to other <em>Solr</em> Search Servers";
          var nameValue = {
            value: value,
            valuehl: valuehl
          };
          expect(_.contains(features, nameValue));
        });

      });

      describe("with no records found", function () {
        beforeEach(function () {
          this.paginatedCollection = new Solrita.SolrPaginatedCollection();
          this.jsonout = loadJson("solr-notfound.json");
          this.ajaxStub = sinon.stub(jQuery, "ajax");
          this.ajaxStub.yieldsTo("success", this.jsonout);
          this.paginatedCollection.fetch();
        });
        afterEach(function () {
          this.ajaxStub.restore();
        });
        it("should has zero records", function () {
          expect(this.paginatedCollection.length).toEqual(0);
        });
        it("should has zero in total", function () {
          expect(this.paginatedCollection.total).toEqual(0);
        });
        it("should has zero in totalPages", function () {
          expect(this.paginatedCollection.totalPages).toEqual(0);
        });
      });
    });

    describe("With no Stub", function () {
      describe("getCurrentParams", function () {
        beforeEach(function () {
          this.paginatedCollection = new Solrita.SolrPaginatedCollection();
        });
        it("should return empty q param when is created", function () {
          expect(this.paginatedCollection.getCurrentParams()).toEqual("q=");
        });
        it("should return q param when has query", function () {
          this.paginatedCollection.query = "foo";
          expect(this.paginatedCollection.getCurrentParams()).toEqual("q=foo");
        });
        it("should return one fq param when has one facetQuery", function () {
          this.paginatedCollection.facetQueries = ['foo:bar'];
          expect(this.paginatedCollection.getCurrentParams()).toEqual("q=&fq=foo:bar");
        });
        it("should return two fq params when has two facetQuery", function () {
          this.paginatedCollection.facetQueries = ['foo:bar', 'duh:kru'];
          expect(this.paginatedCollection.getCurrentParams()).toEqual("q=&fq=foo:bar&fq=duh:kru");
        });
      });
    });

  });

});
