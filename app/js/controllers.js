'use strict';

/* Controllers */
var result = new Array();
var a;
bestgameApp.controller('WitajCtrl', function ($scope) {
});

bestgameApp.controller('LudzieCtrl', ['$scope','zmienna',function ($scope,zmienna) {
	$scope.liczba = zmienna.wartosc;
	console.log("byla liczba: " + $scope.liczba);
    $scope.$watch('liczba', function(newValue, oldValue) {
     console.log("Zmiana " + oldValue + " na " + newValue);
     zmienna.wartosc = newValue;
  });

}]);


  // $scope.videos = [
  //   {'name': 'Nexus S',
  //    'snippet': 'Fast just got faster with Nexus S.',
  //    'age': 1},
  //   {'name': 'Motorola XOOM™ with Wi-Fi',
  //    'snippet': 'The Next, Next Generation tablet.',
  //    'age': 2},
  //   {'name': 'MOTOROLA XOOM™',
  //    'snippet': 'The Next, Next Generation tablet.',
  //    'age': 3}
  // ];
	// function loadChirp(){
// 	bestgameApp.controller('WitajCtrl', function ($scope, $http, $location) {
// 	function ($http, $rootScope, $location) {
// 	  $http.get('phones/testowanie.json').success(function(data) {
// 	  //    $scope.videos = data;
// 	  //    console.log(data);
// 	  // });
// // 	setTimeout("loadChirp()",2000);
// // }
// 				for (var i = 0; i < data.length; i++) {
//                 var x = new Object(data[i]);
//                 result.push(x);
//             }
//         });
//        $rootScope.a = result;
//         $location.path("/phones");
//     });
// });


bestgameApp.controller('WitajCtrl', ['$http', '$scope', function ($http, $scope) {
				$http.get('phones/testing.json').success(function (data) {
					console.log(data);
						// for (var i = 0; i < data.length; i++) {
						//
						// 		var x = new Object(data[i]);
						// 		result.push(x);
						// 		console.log(result.push(x))
						// }
						$scope.videos = data;
				});
				// $scope.videos = result;
				// console.log(result);
			//  $location.path("/phones");
		}]);





bestgameApp.controller('ProtosiCtrl', function ($scope,$http) {
	$scope.pobrana = "czekam";
	$http.get('populacja').success(function(data) {
	  console.log(data);
	  $scope.pobrana = data.wartosc;
	});
});

bestgameApp.controller('ZergiCtrl', function ($scope) {
});
