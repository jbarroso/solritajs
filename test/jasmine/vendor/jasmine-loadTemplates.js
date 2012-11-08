jasmine.Fixtures.prototype.loadTemplate_ = function(template) {
  var templateUrl = "/backbone/templates/" + template;
  var self = this;  
  $.ajax({
    async: false, // must be synchronous to guarantee that no tests are run before fixture is loaded
    cache: false,
    dataType: 'html',
    url: templateUrl,
    success: function(data) {
      $('#' + self.containerId).append(data);
    }
  });
};

function loadTemplate(template) {
  jasmine.getFixtures().loadTemplate_(template);
}

jasmine.Fixtures.prototype.loadJson_ = function(jsonFile) {
  var jsonUrl = "./spec/javascripts/fixtures/" + jsonFile;
  var json = "";
  var self = this;  
  $.ajax({
    async: false, // must be synchronous to guarantee that no tests are run before fixture is loaded
    cache: false,
    dataType: 'json',
    url: jsonUrl,
    success: function(data) {
      json = data;
    }
  });
  return json;
};

function loadJson(jsonFile) {
  return jasmine.getFixtures().loadJson_(jsonFile);
}
