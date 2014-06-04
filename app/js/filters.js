'use strict';

/* Filters */

angular.module('bestgameAppFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
