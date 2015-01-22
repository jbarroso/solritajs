define([], function() {

  var data = {
    "responseHeader": {
      "status": 0,
      "QTime": 7,
      "params": {
        "facet": "true",
        "indent": "on",
        "facet.mincount": "1",
        "q": "apache solr",
        "hl.fl": "*",
        "facet.field": "cat",
        "wt": "json",
        "hl": "true"
      }
    },
    "response": {
      "numFound": 2,
      "start": 0,
      "docs": [{
        "id": "SOLR1000",
        "name": "Solr, the Enterprise Search Server",
        "manu": "Apache Software Foundation",
        "cat": ["software",
          "search"
        ],
        "features": ["Advanced Full-Text Search Capabilities using Lucene",
          "Optimized for High Volume Web Traffic",
          "Standards Based Open Interfaces - XML and HTTP",
          "Comprehensive HTML Administration Interfaces",
          "Scalability - Efficient Replication to other Solr Search Servers",
          "Flexible and Adaptable with XML configuration and Schema",
          "Good unicode support: héllo (hello with an accent over the e)"
        ],
        "price": 0.0,
        "price_c": "0,USD",
        "popularity": 10,
        "inStock": true,
        "incubationdate_dt": "2006-01-17T00:00:00Z",
        "_version_": 1417101666755280896
      }, {
        "id": "UTF8TEST",
        "name": "Test with some UTF-8 encoded characters",
        "manu": "Apache Software Foundation",
        "cat": ["software",
          "search"
        ],
        "features": ["No accents here",
          "This is an e acute: é",
          "eaiou with circumflexes: êâîôû",
          "eaiou with umlauts: ëäïöü",
          "tag with escaped chars: <nicetag/>",
          "escaped ampersand: Bonnie & Clyde",
          "Outside the BMP:𐌈 codepoint=10308, a circle with an x inside. UTF8=f0908c88 UTF16=d800 df08"
        ],
        "price": 0.0,
        "price_c": "0,USD",
        "inStock": true,
        "_version_": 1417101666771009536
      }]
    },
    "facet_counts": {
      "facet_queries": {},
      "facet_fields": {
        "cat": [
          "search", 2,
          "software", 2
        ]
      },
      "facet_dates": {},
      "facet_ranges": {}
    },
    "highlighting": {
      "SOLR1000": {
        "name": ["<em>Solr</em>, the Enterprise Search Server"],
        "features": ["Scalability - Efficient Replication to other <em>Solr</em> Search Servers"],
        "manu": ["<em>Apache</em> Software Foundation"]
      },
      "UTF8TEST": {
        "manu": ["<em>Apache</em> Software Foundation"]
      }
    }
  };

  return data;

});
