define(['jquery', 'lodash', 'backbone', 'router', 'modules/solrita', 'app'], function ($, _, Backbone, Router, Solrita, app) {

	describe("Router Spec", function () {

		beforeEach(function () {
			try {
				Backbone.history.start({
					silent: true,
					pushState: true
				});
			} catch (e) {};
			this.paginatedCollection = new Solrita.SolrPaginatedCollection();
			this.jsonout = loadJson("solr-all.json");
			this.ajaxStub = sinon.stub($, "ajax");
			this.ajaxStub.yieldsTo("success", this.jsonout);
			this.router = new Router({
				collection: this.paginatedCollection
			});
			sinon.stub(this.router, "initLayout");
			this.searchActionSpy = spyOn(this.router, 'searchAction').andCallThrough();
			var that = this;
			this.getNewSearchPushStateSpy = function (params) {
				return spyOn(window.history, 'pushState').andCallFake(function (data, title, url) {
					expect(url).toEqual(app.root + 'search/' + params);
					that.router.searchAction(params);
				});
			};
			this.fakeSearchNavigation = function (params) {
				var pushStateSpy = that.getNewSearchPushStateSpy(params);
				that.router.navigate('/search/' + params);
				expect(pushStateSpy).toHaveBeenCalled();
				expect(that.searchActionSpy).toHaveBeenCalled();
			};
		});
		afterEach(function () {
			this.ajaxStub.restore();
		});
		it('should has a "defaultAction" route', function () {
			expect(this.router.routes['*actions']).toEqual('defaultAction');
		});
		it('should has a "searchAction" route', function () {
			expect(this.router.routes['search*params']).toEqual('searchAction');
		});
		it("should navigate to defaultAction", function () {
			var defaultActionSpy = spyOn(this.router, 'defaultAction').andCallThrough();
			var that = this;
			var pushStateSpy = spyOn(window.history, 'pushState').andCallFake(function (data, title, url) {
				expect(url).toEqual(app.root);
				that.router.defaultAction('');
			});

			this.router.navigate('/');
			expect(pushStateSpy).toHaveBeenCalled();
			expect(defaultActionSpy).toHaveBeenCalled();
		});

		it("should navigate to searchAction", function () {
			this.fakeSearchNavigation('foo');
			expect(this.searchActionSpy).toHaveBeenCalled();
		});
		it("should search with q param", function () {
			this.fakeSearchNavigation('&q=test');
			expect(this.paginatedCollection.query).toEqual('test');
		});
		it("should search with defaultQuery when q param is empty", function () {
			this.fakeSearchNavigation('&q=');
			expect(this.paginatedCollection.query).toEqual(app.defaultQuery);
		});
		it("should search with q param and question mark", function () {
			this.fakeSearchNavigation('?q=test');
			expect(this.paginatedCollection.query).toEqual('test');
		});
		it("should search with q param when more params are defined", function () {
			this.fakeSearchNavigation('&foo=bar&q=test&duh=ouch');
			expect(this.paginatedCollection.query).toEqual('test');
		});
		it("should search with app.defaultQuery when q param isn't defined", function () {
			this.fakeSearchNavigation('&foo=bar&duh=ouch');
			expect(this.paginatedCollection.query).toEqual(app.defaultQuery);
		});
		it("should search with zero currentPage when start isn't defined", function () {
			this.fakeSearchNavigation('&foo=bar');
			expect(this.paginatedCollection.currentPage).toEqual(0);
		});
		it("should search with currentPage when start is defined", function () {
			this.fakeSearchNavigation('&start='+app.defaultPerPage);
			expect(this.paginatedCollection.currentPage).toEqual(1);
		});
		it("should search with one fq param", function () {
			this.fakeSearchNavigation('&fq="cat:electronics"');
			var expectedFacetQueries = ['"cat:electronics"'];
			expect(this.paginatedCollection.facetQueries).toEqual(expectedFacetQueries);
		});
		it("should search with multiple fq params", function () {
			this.fakeSearchNavigation('&fq="cat:electronics"&fq="cat:music"');
			var expectedFacetQueries = ['"cat:electronics"', '"cat:music"'];
			expect(this.paginatedCollection.facetQueries).toEqual(expectedFacetQueries);
		});
		it("should search with no fq param", function () {
			this.fakeSearchNavigation('&foo=bar&bar=duh"');
			var expectedFacetQueries = [];
			expect(this.paginatedCollection.facetQueries).toEqual(expectedFacetQueries);
		});
	});
});
