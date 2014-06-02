'use strict';

/* App Module */

var bestgameApp = angular.module('bestgameApp', [
  'ngRoute'
]);

bestgameApp = angular.module('bestgameApp', [
  'ngRoute'
]);

bestgameApp.factory('zmienna', function() {
	return {wartosc:"poczatkowa"};
});


bestgameApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/witaj', {
        templateUrl: 'partials/powitanie.html',
        controller: 'WitajCtrl'
      }).
      when('/video/:videoId', {
        templateUrl: 'partials/video.html',
        controller: 'ShowVideoCtrl'
      }).
      when('/dodaj', {
        templateUrl: 'partials/dodaj.html'
        //controller: 'AddCtrl'
      }).
      when('/protosi', {
        templateUrl: 'partials/protosi.html',
        controller: 'ProtosiCtrl'
      }).
      when('/zergi', {
        templateUrl: 'partials/zergi.html',
        controller: 'ZergiCtrl'
      }).
      when('/usun/:videoId', {
        template:'',
        controller: 'AllCtrl'
      }).
      otherwise({
        redirectTo: '/videos'
      });
  }]);
