this["JST"] = this["JST"] || {};

this["JST"]["app/templates/facets.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="well side-bar-nav">\n\t<!--Sidebar content-->\n\t<ul class="nav nav-list">\n\n\t\t<li><h5>Field Facet</h5></li>\n\n\t\t';
 for(var i=0;i<facetFields.length; i++){ 
		var currentFacetField = facetFields[i];
		var currentFacetFieldValues = [];
		if (facetCounts.facet_fields !== undefined 
			&& facetCounts.facet_fields[currentFacetField] !== undefined){
			currentFacetFieldValues =  facetCounts.facet_fields[currentFacetField];
			}
		
;__p+='\n\t\t';
 if (i>0) {
;__p+='\n\t\t\t<li class="divider"/>\n\t\t';
 } 
;__p+='\n\t\t<li class="nav-header">\n\t\t\t'+
( currentFacetField )+
'\n\t\t</li>\n\t\t';
 for (var j=0;j<currentFacetFieldValues.length;j++) { 
;__p+='\n\t\t<li>\n\t\t<a id="'+
((currentFacetField + ':' + j))+
'" class="fq" \n\t\t\thref="search?'+
(infoSolr.currentParams)+
'&fq='+
((currentFacetField + ':' + '%22' + escape(currentFacetFieldValues[j]) + '%22') )+
'">\n\t\t\t\t<span class="badge badge-info">\n\t\t\t\t\t'+
(currentFacetFieldValues[j+1])+
'\n\t\t\t\t</span>&nbsp;\n\t\t\t\t'+
(currentFacetFieldValues[j])+
'\n\t\t\t</a>\n\t\t</li>\n\t\t';
 j++; } 
;__p+='\n\t\t';
 } 
;__p+='\n\t</ul>\n</div>\n';
}
return __p;
};

this["JST"]["app/templates/filters.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='';
 if (facetQueries.length>0) { 
;__p+='\n<div class="row-fluid">\n\t<div class="span12">\n\t\t<ul class="breadcrumb">\n\t\t\t<li>\n\t\t\t\t<span>Filters </span>\n\t\t\t</li>\n\t\t\t';
 for(var i=0; i<facetQueries.length; i++) { 
;__p+='\n\t\t\t<li>\n\t\t\t\t<span class="divider">/</span>\n\t\t\t\t<a id="'+
(facetQueries[i])+
'" class="rfq" data-bypass href="#">\n\t\t\t\t\t'+
(unescape(facetQueries[i]))+
'\n\t\t\t\t</a> \n\t\t\t</li>\n\t\t\t';
 } 
;__p+='\n\t\t</ul>\n\t</div>\n</div>\n';
 } 
;__p+='\n';
}
return __p;
};

this["JST"]["app/templates/layouts/main.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<header class="row-fluid">\n  <div class="span12">\n    <ul class="nav nav-pills pull-right">\n      <li class="active">\n        <a href="#">Demo</a>\n      </li>\n      <li>\n        <a href="https://github.com/jbarroso/solritajs">Source</a>\n      </li>\n    </ul>\n    <h2>\n      <a class="brand" href="#">Solrita.js</a>\n      <small id="subtitle">Backbone.js client for\n        <a href="http://lucene.apache.org/solr/">Apache Solr</a>\n      </small>\n    </h2>\n  </div>\n</header>\n<div class="row-fluid">\n  <div class="span12">\n    <div id="search"></div>\n  </div>\n</div>\n<div id="filters"></div>\n<div class="row-fluid">\n  <div class="span9">\n    <div class="row-fluid">\n      <div class="span12">\n          <div id="results-header" class="row-fluid"></div>\n      </div>\n    </div>\n    <div id="results" class="row-fluid"/>\n    <div id="pagination" class="row-fluid"></div>\n  </div>\n  <div id="facets" class="span3"></div>\n</div>\n<hr/>\n<footer>\n  <p class="muted credit">\n    <a href="https://github.com/jbarroso">Jose Angel Barroso</a>| MIT Licence</p>\n</footer>\n';
}
return __p;
};

this["JST"]["app/templates/pagination.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='';
if (total>0 && totalPages>1) { 
;__p+='\n<div class="navbar">\n\t<div class="navbar-inner">\n\t\t<div class="pagination pagination-centered">\n\t\t\t<ul>\n\t\t\t\t<li '+
((isFirstPage) ? 'class="disabled"':'' )+
'>\n\t\t\t\t<a '+
((isFirstPage) ? 'data-bypass':'')+
' \n\t\t\t\t\thref="'+
((isFirstPage) ? '#' : searchBase + '&start=0')+
'" class="serverfirst">«</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li '+
((isFirstPage) ? 'class="disabled"':'' )+
'>\n\t\t\t\t<a '+
((isFirstPage) ? 'data-bypass':'')+
' \n\t\t\t\t\thref="'+
((isFirstPage) ? '#' : searchBase + '&start='+(perPage*(currentPage-1)))+
'" \n\t\t\t\t\tclass="serverprevious">&lt;</a>\n\t\t\t\t</li>\n\n\t\t\t\t';
 for(p=beginIndex;p<endIndex;p++){ 
;__p+='\n\t\t\t\t';
 var isCurrentPage = (currentPage === p);
;__p+='\n\t\t\t\t<li '+
((isCurrentPage)? 'class="active"': '' )+
'>\n\t\t\t\t<a '+
((isCurrentPage) ? 'data-bypass':'')+
'  \n\t\t\t\t\thref="'+
((isCurrentPage) ? '#': searchBase + '&start=' + (perPage*p))+
'" class="page">'+
(p+1)+
'</a>\n\t\t\t\t</li>\n\t\t\t\t';
 } 
;__p+='\t\n\n\t\t\t\t<li '+
((isLastPage) ? 'class="disabled"': '')+
'>\n\t\t\t\t<a '+
((isLastPage) ? 'data-bypass':'')+
' \n\t\t\t\t\thref="'+
((isLastPage) ? '#' : searchBase + '&start=' + (perPage*(currentPage+1)))+
'" \n\t\t\t\t\tclass="servernext">&gt;</a>\n\t\t\t\t</li>\n\t\t\t\t<li '+
((isLastPage) ? 'class="disabled"': '')+
'>\n\t\t\t\t<a '+
((isLastPage) ? 'data-bypass':'')+
' \n\t\t\t\t\thref="'+
((isLastPage) ? '#' : searchBase + '&start=' + (perPage*(totalPages-1)))+
'" \n\t\t\t\t\tclass="serverlast">»</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n';
}
;__p+='\n';
}
return __p;
};

this["JST"]["app/templates/result.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="well result">\n\t<div class="title">\n\t\t';
 if (typeof compName_s!=="undefined") { 
;__p+=' \n\t\t<h4>'+
( compName_s.valuehl )+
'</h4>\n\t\t';
 } else {
;__p+='\n\t\t<h4>'+
( name.valuehl )+
'</h4>\n\t\t';
 } 
;__p+='\n\t</div>\n\t<dl class="dl-horizontal" style="margin:0">\n\t\t';
 if (typeof price_c!=="undefined") { 
;__p+=' \n\t\t<dt>Price</dt>\n\t\t<dd>'+
(price_c.valuehl)+
'</dd>\n\t\t';
 } 
;__p+='\n\t\t';
 if (typeof features!=="undefined") { 
;__p+=' \n\t\t\t<dt>Features</dt>\n\t\t\t';
 for(var i=0; i< features.length; i++) { 
;__p+='\n\t\t\t\t<dd>'+
(features[i].valuehl)+
'</dd>\n\t\t\t';
 } 
;__p+='\n\t\t';
 } 
;__p+='\n\t\t';
 if (typeof inStock!=="undefined") { 
;__p+=' \n\t\t<dt>In Stock<dt>\n\t\t<dd>'+
(inStock.valuehl)+
'</dd>\n\t\t';
 } 
;__p+='\n\t\t';
 if (typeof cat!=="undefined") { 
;__p+=' \n\t\t<dt>Categories</dt>\n\t\t\t';
 for(var i=0; i< cat.length; i++) { 
;__p+='\n\t\t\t\t<dd>'+
(cat[i].valuehl)+
'</dd>\n\t\t\t';
 } 
;__p+='\n\t\t';
 } 
;__p+='\n\t\t';
 if (typeof manu!=="undefined") { 
;__p+=' \n\t\t<dt>Manufactory</dt>\n\t\t<dd>'+
(manu.valuehl)+
'</dd>\n\t\t';
 } 
;__p+='\n\t\t';
 if (typeof address_s!=="undefined") { 
;__p+=' \n\t\t<dt>Address</dt>\n\t\t<dd>'+
(address_s.valuehl)+
'</dd>\n\t\t';
 } 
;__p+='\n\t</dl>\n</div>\n';
}
return __p;
};

this["JST"]["app/templates/results-header.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='';
 if (total > 0) { 
;__p+='\n  <div class="navbar span12">\n    <div class="navbar-inner">\n      <div class="container">\n        <ul class="nav pull-left">\n          <li>\n            <p class="navbar-text"><span><strong>'+
(total)+
' </strong>results found in '+
(qTime)+
'ms</span></p>\n          </li>\n        </ul>\n\t\t\t\t<a class="btn btn-navbar pull-right" data-toggle="collapse" data-target=".nav-collapse">\n\t\t\t\t\t\t<span class="icon-bar"></span>\n\t\t\t\t\t\t<span class="icon-bar"></span>\n\t\t\t\t\t\t<span class="icon-bar"></span>\n\t\t\t\t</a>\n        <ul class="nav pull-right">\n          <li>\n            <ul class="pager navbar-text" style="margin:0">\n              <li class="'+
((isFirstPage) ? ' disabled':'' )+
'">\n                <a '+
((isFirstPage) ? 'data-bypass':'')+
' \n\t\t\t\t\t\t\t\t\thref="'+
((isFirstPage) ? '#' : searchBase + '&start='+(perPage*(currentPage-1)))+
'"><</a>\n              </li>\n              <li>\n                <strong>Page '+
(currentPage+1)+
' </strong>of '+
(totalPages)+
'\n              </li>\n              <li class="'+
((isLastPage) ? ' disabled':'' )+
'">\n\t\t\t\t\t\t\t<a '+
((isLastPage) ? 'data-bypass':'')+
' \n\t\t\t\t\t\t\t\thref="'+
((isLastPage) ? '#' : searchBase + '&start=' + (perPage*(currentPage+1)))+
'">></a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n\t\t\t\t<div class="nav-collapse collapse pull-right">\n          <form class="form-inline" style="margin:0px">\n            <ul class="nav pull-right">\n              <li>\n\t\t\t\t\t\t\t\t<div class="pull-left">\n\t\t\t\t\t\t\t\t\t<label class="navbar-text" for="num">Items per page:</label>\n\t\t\t\t\t\t\t\t\t<div id="num" style="display: inline-block" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="pull-left" style="margin-left:5px">\n\t\t\t\t\t\t\t\t\t<label class="navbar-text" for="sort">Sort by:</label>\n\t\t\t\t\t\t\t\t\t<div id="sort" style="display: inline-block" />\n\t\t\t\t\t\t\t\t</div>\n              </li>\n              <li class="divider-vertical" />\n            </ul>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n';
 } 
;__p+='\n';
 if (noResultsFound) { 
;__p+='\n\t<div class="alert alert-warn" class="span12">No results found</div>\n';
 } 
;__p+='\n';
}
return __p;
};

this["JST"]["app/templates/search.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<form id="search-form" class="form-search">\n  <div class="control-group well">\n    <div class="controls">\n      <input id="search-query" type="text" value="'+
(printQuery)+
'" style="width: 47%" class="search-query">\n      <button type="submit" class="btn">\n        <i class="icon-search"></i> Search</button>\n    </div>\n  </div>\n</form>\n';
}
return __p;
};