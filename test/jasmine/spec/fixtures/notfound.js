define([], function () {
  var data = {
    "responseHeader": {
      "status": 0,
      "QTime": 1,
      "params": {
        "facet": "true",
        "indent": "on",
        "facet.mincount": "1",
        "q": "asdf",
        "hl.fl": "name,features",
        "facet.field": "cat",
        "wt": "json",
        "hl": "true"
      }
    },
    "response": {
      "numFound": 0,
      "start": 0,
      "docs": []
    },
    "facet_counts": {
      "facet_queries": {},
      "facet_fields": {
        "cat": []
      },
      "facet_dates": {},
      "facet_ranges": {}
    },
    "highlighting": {}
  };

  return data;
});
