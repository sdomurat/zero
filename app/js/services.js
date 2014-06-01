'use strict';

/* Services */

var applicationServices = angular.module('applicationServices', ['ngResource']);

applicationServices.factory('Vid', ['$resource',
  function($resource){
    return $resource('phones/testing.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);
