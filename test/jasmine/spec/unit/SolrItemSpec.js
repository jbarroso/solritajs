define(["modules/solrita"], function (Solrita) {

  describe("SolrItem (Backbone Model) Spec", function () {

    it("Should be created", function () {
      var solrItem = new Solrita.SolrItem();
      expect(solrItem).toBeDefined();
    });
    it("Should could be created with a property", function () {
      var solrItem = new Solrita.SolrItem({
        name: 'foo'
      });
      expect(solrItem.get('name')).toEqual('foo');
    });

    it("Should have escape method", function () {
      var solrItem = new Solrita.SolrItem({
        foo: '<span>yow</span>'
      });
      expect(solrItem.escape('foo')).toEqual('&lt;span&gt;yow&lt;/span&gt;');
    });
  });
});
