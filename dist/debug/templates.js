this['JST'] = this['JST'] || {};

this['JST']['app/templates/filters.html'] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='';
 if (facetQueries.length>0) { 
;__p+='\n<div class="row-fluid">\n\t<div class="span12">\n\t\t<ul class="breadcrumb">\n\t\t\t';
 for(var i=0; i<facetQueries.length; i++) { 
;__p+='\n\t\t\t<li>\n\t\t\t\t<a id="'+
(facetQueries[i])+
'" class="rfq" data-bypass href="#">\n\t\t\t\t\t'+
(unescape(facetQueries[i]))+
'\n\t\t\t\t</a> \n\t\t\t\t';
 if (facetQueries.length > (i+1)) { 
;__p+='\n\t\t\t\t\t<span class="divider">/</span>\n\t\t\t\t';
 } 
;__p+='\n\t\t\t</li>\n\t\t\t';
 } 
;__p+='\n\t\t</ul>\n\t</div>\n</div>\n';
 } 
;__p+='\n';
}
return __p;
};

this['JST']['app/templates/results-header.html'] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='';
 if(total>0) { 
;__p+='\n<div style="float:left" class="span12">\n\t<form class="form-inline" style="float:left">\n\t\t<strong>'+
(total)+
'</strong> results found in '+
(qTime)+
' ms \n\t\t<span class="divider">/</span>\n\t\tPage: '+
(currentPage+1)+
' of '+
(totalPages)+
' shown\n\t\t<span class="divider">/</span>\n\t\t<label for="num">Items per page:</label>\n\t\t<div id="num" style="display: inline-block"/>\n\t\t<label for="sort">Sort by:</label>\n\t\t<div id="sort" style="display: inline-block"/>\n\t</form>\n</div>\n';
 } else { 
;__p+='\n<div class="alert alert-warn">\n\tNo results found\n</div>\n';
 } 
;__p+='\n';
}
return __p;
};

this['JST']['app/templates/result.html'] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="well result">\n\t<div class="title">\n\t\t';
 if (typeof name!=="undefined") { 
;__p+=' \n\t\t<h4>'+
( name.valuehl )+
'</h4>\n\t\t';
 } 
;__p+='\n\t\t';
 if (typeof compName_s!=="undefined") { 
;__p+=' \n\t\t<h4>'+
( compName_s.valuehl )+
'</h4>\n\t\t';
 } 
;__p+='\n\t</div>\n\t<div>Id: '+
( id )+
'</div>\n\t';
 if (typeof price_c!=="undefined") { 
;__p+=' \n\t\t<div>Price: '+
(price_c.valuehl)+
'</div>\n\t';
 } 
;__p+='\n\t';
 if (typeof features!=="undefined") { 
;__p+=' \n\t\t<div>Features: '+
(features.valuehl)+
'</div>\n\t';
 } 
;__p+='\n\t';
 if (typeof inStock!=="undefined") { 
;__p+=' \n\t\t<div>In Stock: '+
(inStock.valuehl)+
'</div>\n\t';
 } 
;__p+='\n\t';
 if (typeof cat!=="undefined") { 
;__p+=' \n\t\t<div>Category: '+
(cat.valuehl)+
'</div>\n\t';
 } 
;__p+='\n\t';
 if (typeof manu!=="undefined") { 
;__p+=' \n\t\t<div>Manufactory: '+
(manu.valuehl)+
'</div>\n\t';
 } 
;__p+='\n\t';
 if (typeof address_s!=="undefined") { 
;__p+=' \n\t\t<div>Address: '+
(address_s.valuehl)+
'</div>\n\t';
 } 
;__p+='\n</div>\n';
}
return __p;
};

this['JST']['app/templates/facets.html'] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<h3>Field Facet</h3>\n\n<div class="well side-bar-nav">\n\n\t<!--Sidebar content-->\n\t<ul class="nav nav-list">\n\t\t';
 for(var i=0;i<facetFields.length; i++){ 
		var currentFacetField = facetFields[i];
		var currentFacetFieldValues = [];
		if (facetCounts.facet_fields !== undefined 
			&& facetCounts.facet_fields[currentFacetField] !== undefined){
			currentFacetFieldValues =  facetCounts.facet_fields[currentFacetField];
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

this['JST']['app/templates/search.html'] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<form id="search-form" class="well form-search">\n\t<input id="search-query" type="text" value="'+
(printQuery)+
'" class="input-xxlarge search-query">\n\t<button type="submit" class="btn">\n\t\t<i class="icon-search"></i> Search\n\t</button>\n</form>\n';
}
return __p;
};

this['JST']['app/templates/layouts/main.html'] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="row-fluid">\n\t<div class="span12">\n\t\t<div class="page-header">\n\t\t\t<h1>Solrita.js <small>a Backbone.js client for Apache Solr</small></h1>\n\t\t</div>\n\t\t<div id="search"></div>\n\t</div>\n</div>\n<div id="filters"></div>\n<div class="row-fluid">\n\t<div class="span9">\n\t\t<div class="row-fluid">\n\t\t\t<div id="results-header"></div>\n\t\t</div>\n\t\t<div class="row-fluid">\n\t\t\t<ul id="results" class="unstyled"></ul>\n\t\t</div>\n\t\t<div class="row-fluid">\n\t\t\t<div id="pagination"></div>\n\t\t</div>\n\t</div>\n\t<div class="span3">\n\t\t<div id="facets"></div>\n\t</div>\n</div>\n<hr/>\n<footer>\n<div>\n\t<span>Documentation: </span> <a href="http://lucene.apache.org/solr">Solr Home Page</a>, <a href="http://wiki.apache.org/solr">Solr Wiki</a>\n</div>\n<div>Disclaimer: The locations displayed in this demonstration are purely fictional.  It is more than likely that no store with the items listed actually exists at that location!</div>    \n</footer>\n';
}
return __p;
};

this['JST']['app/templates/pagination.html'] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='';
if (total>0 && totalPages>1) { 
;__p+='\n<div class="pagination pagination-centered">\n\t<ul>\n\t\t<li '+
((firstPage!=currentPage) ? '':'class="disabled"' )+
'>\n\t\t\t<a href="search?'+
(currentParams)+
'&start=0" class="serverfirst">&lt;&lt;</a>\n\t\t</li>\n\n\t\t<li '+
((currentPage>firstPage) ? '':'class="disabled"')+
'>\n\t\t\t<a href="search?'+
(currentParams)+
'&start='+
((perPage*(currentPage-1)))+
'" \n\t\t\t\tclass="serverprevious">&lt;</a>\n\t\t</li>\n\n\t\t';
 for(p=beginIndex;p<endIndex;p++){ 
;__p+='\n\t\t<li '+
((currentPage === p)? 'class="disabled"': '' )+
'>\n\t\t\t<a href="search?'+
(currentParams)+
'&start='+
((perPage*p))+
'" class="page">'+
(p+1)+
'</a>\n\t\t</li>\n\t\t';
 } 
;__p+='\t\n\t\t<li '+
((currentPage+1<totalPages) ? '':'class="disabled"')+
'>\n\t\t\t<a href="search?'+
(currentParams)+
'&start='+
((perPage*(currentPage+1)))+
'" \n\t\t\t\tclass="servernext">&gt;</a>\n\t\t</li>\n\t\t<li '+
((lastPage!=currentPage+1) ? '':'class="disabled"')+
'>\n\t\t\t<a href="search?'+
(currentParams)+
'&start='+
((perPage*(totalPages-1)))+
'" \n\t\t\t\tclass="serverlast">&gt;&gt;</a>\n\t\t</li>\n\t</ul>\n</div>\n';
}
;__p+='\n';
}
return __p;
};