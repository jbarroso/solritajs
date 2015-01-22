define([
  "app",
  // Model
  "modules/solrita/models/item",
  // Collections
  "modules/solrita/collections/items",
  // Views
  "modules/solrita/views/search",
  "modules/solrita/views/results",
  "modules/solrita/views/result",
  "modules/solrita/views/facets",
  "modules/solrita/views/filters",
  "modules/solrita/views/results-header",
  "modules/solrita/views/pagination",
  "modules/solrita/views/option",
  "modules/solrita/views/num",
  "modules/solrita/views/sort"

  ], function (app, SolrItem, SolrPaginatedCollection, SearchView, ResultsView, ResultView, FacetsView, FiltersView, ResultsHeaderView, PaginationView, OptionView, NumView, SortView) {

    // Create a new module
    var Solrita = {};

    Solrita.SolrItem = SolrItem;
    Solrita.SolrPaginatedCollection = SolrPaginatedCollection;

    Solrita.Views = {};
    Solrita.Views.SearchView = SearchView;
    Solrita.Views.ResultsView = ResultsView;
    Solrita.Views.ResultView = ResultView;
    Solrita.Views.FacetsView = FacetsView;
    Solrita.Views.FiltersView = FiltersView;
    Solrita.Views.ResultsHeaderView = ResultsHeaderView;
    Solrita.Views.PaginationView = PaginationView;
    Solrita.Views.OptionView = OptionView;
    Solrita.Views.NumView = NumView;
    Solrita.Views.SortView = SortView;

    return Solrita;

  });
