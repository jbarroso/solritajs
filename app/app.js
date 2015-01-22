define(function(require, exports, module) {
  "use strict";

  var $ = require("jquery");

  // set ajax params without brackets []
  $.ajaxSettings.traditional = true;

  var app = {
    // The root path to run the application.
    root: "/",
    pushState: true,
    solrURL: "http://localhost:8983/solr/select",
    //solrURL: "http://solritajs-server.herokuapp.com/solr/select",
    defaultQuery: "*:*",
    defaultFacetFieldsArray: ["cat", "manu_exact"],
    defaultPerPage: 5,
    defaultSortField: "price desc",
    paginationSize: 2,
    perPageArray: [3, 5, 10, 15, 20, 50],
    sortFieldArray: ["price asc", "price desc"],
    hlSimplePre: "<em>",
    hlSimplePro: "</em>"
  };

  module.exports = app;

});
