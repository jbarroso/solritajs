Sorlita.js
==========

A Backbone.js client for Apache Solr. 

## Demo

[http://solritajs.herokuapp.com/](http://solritajs.herokuapp.com/)

This demo is also using a Solr server deployed to Heroku with the sample schema and data (computer components, screens, etc.) that are included in the [Solr tutorial](http://lucene.apache.org/solr/4_0_0/tutorial.html).

You can also run it by yourself using Backbone Boilerplate framework tool: [grunt-bbb](http://github.com/backbone-boilerplate/grunt-bbb) and with your own Solr server (app.js includes all the configuration options).

## Features / Overview

Based on the [VelocityResponseWriter](http://wiki.apache.org/solr/VelocityResponseWriter) (aka Solritas) but 100% made with javascript. It is my first open source project in Github and also with these fantastic new javascript libraries! 

My goal is cover all all the features that Solritas has but for the moment I have:
* The simple main search form.
* Pagination, sorting, choose number of results per page.
* Facet Fields column.
* Filter by a Facet field value.
* Highlighting search string in all the fields (even in multivalued fields).

All the actions go through the Backbone’s Router so the URL’s are good and bookmarkable.

I am also playing with Twitter’s Bootstrap and responsive design.

## Stack

* [Backbone Bolierplate](https://github.com/backbone-boilerplate/).
* [Backbone Layout Manager](https://github.com/tbranyen/backbone.layoutmanager).
* [Backbone Paginator](https://github.com/addyosmani/backbone.paginator).
* [Twitter Bootstrap](http://twitter.github.com/bootstrap/).
* [Spin.js](https://github.com/fgnass/spin.js).
* Integration and unit test with:
    - [Jasmine](http://pivotal.github.com/jasmine/) ([jasmine-jquery](https://github.com/velesin/jasmine-jquery) and  [jasmine-loadTemplates](https://gist.github.com/1359867) to load json).
    - [Sinon](http://sinonjs.org/) (spies, stubs and mocks).

## Release HIstory

* 0.1 working!

## TODO

* [Feature request](https://github.com/jbarroso/solritajs/wiki/Feature-requests) by [claushjuhl](https://github.com/clausjuhl)
* Suggest in search form.
* Collapsable result list with options to choose between large/short view format.
* Add facet filters links in result values.
* i18n messages
* Change templates to Handlebars.
* Make it configurable to fit any solr schema (facet fields, field names and types). 
* Show/HIde facet filters and save them in HTML5 local storage.
* Improve code coverage.
* Make it work with node.js when javascript is disable (this also would allow to have results SEO friendly)
* Remove dist directory from github (first I have to deploy in heroku with bbb command).
* … any ideas?

## Licence

Copyright (c) 2012 Jose Angel Barroso.
Licensed under the MIT license.
