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


bestgameApp.controller('WitajCtrl', ['$http', '$scope', function ($http, $scope, $location) {
				$http.get('phones/testing.json').success(function (data) {
					//console.log(data);

						for (var i = 0; i < data.length; i++) {
						//
								var x = new Object(data[i]);
						 		result.push(x);
						 		console.log(result)
						 }
					//	$scope.videos = result;
					//return result;
				});
				 $scope.videos = result;
				// console.log(result);
			  //$location.path("#/witaj");
		}]);




bestgameApp.controller('ShowVideoCtrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http, $rootScope) {
			console.log(result)
			$http.get('phones/testing.json').success(function (data) {
        for (var i = 0; i < data.length; i++) {
            if ($routeParams.videoId === data[i].entry.id.$t.slice(42, 53)) {
                $scope.video = data[i];
                break;
            }

        }
			});
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

bestgameApp.directive('playYoutube', function ($sce) {
    return {
        restrict: 'EA',
        scope: {code: '@'},
        //replace: true,
        template: '\
        <div style="width:700px height:500px;">\n\
            <iframe style="overflow:hidden " width="640" height="385"  src="{{url}}" frameborder="0" allowfullscreen>\n\
            </iframe>\n\
        </div>',
        link: function (scope) {
            //console.log('here');
            scope.$watch('code', function (newVal) {
                if (newVal) {
                    scope.url = $sce.trustAsResourceUrl("//www.youtube.com/embed/" + newVal);
                }
            });
        }
    };
});


bestgameApp.controller('AddCtrl', function ($scope, $rootScope, $location) {
    $scope.dodajVideo = function () {
			console.log('result = ' + result)
        var link = $scope.videoLink.toString();
        var id = "";
        if (link.search("youtube.com") > -1) {
            id = link.slice(32, 53);

            $.ajax({
            url: "https://gdata.youtube.com/feeds/api/videos/" + id + "?&prettyprint=true&alt=json",
            dataType: 'json',
            async: false,
            success: function (data) {
							console.log('data = ' + data)
                $rootScope.a.push(new Object(data));
                $location.path("/witaj")
								console.log(data)
            }
        });
        }
    };
     $rootScope.a = result;
    // $location.path("#/videos")
});
