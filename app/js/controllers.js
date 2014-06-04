'use strict';

/* Controllers */
var result = new Array();
var a;
// bestgameApp.controller('WitajCtrl', function ($scope) {
// });

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
			console.log(result.length)
			if(result == 0){
				$http.get('phones/testing.json').success(function name (data) {
					console.log(result.length)

						for (var i = 0; i < data.length; i++) {
						//
								var x = new Object(data[i]);
						 		result.push(x);
						 		console.log(result)
								console.log()

					//	$scope.videos = result;
					//return result;
				}

				});
			}

				 $scope.videos = result;
				console.log(result)
				setTimeout(name,1000);
				// console.log(result);
			  //$location.path("#/witaj");

		}]);

bestgameApp.controller('AllCtrl', function ($route, $routeParams, $location, $scope, $rootScope) {

    $scope.videos = $rootScope.a;
    $scope.orderProp = 'gd$rating.average';
   	console.log(result)
});



bestgameApp.controller('ShowVideoCtrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http, $rootScope, $location) {
			console.log('result = ' + result)
		//$http.get('phones/testing.json').success(function (data) {
        for (var i = 0; i < result.length; i++) {
            if ($routeParams.videoId === result[i].entry.id.$t.slice(42, 53)) {
                $scope.video = result[i];
                break;
            }

        }
				$scope.usunVideo = function () {
				    for (var i = 0; i < result.length; i++) {
							console.log('robie cos')
				        if ($routeParams.videoId === result[i].entry.id.$t.slice(42, 53)) {
				            result.splice(i, 1);

				        }
				    }
				    $rootScope.a = result;
				    $location.path("/witaj");
				};
				$scope.edytujVideo = function() {
					for (var i = 0; i < result.length; i++) {
						if ($routeParams.videoId === result[i].entry.id.$t.slice(42, 53)) {
							console.log($routeParams.videoId)
							var old = "";
							old = result[i].entry.title.$t;
							console.log('old' + old)
									$scope.$watch('result.entry.title.$t', function(newValue, old) {
										// console.log("Zmiana " + video.entry.title.$t + " na " + newValue);
							})
							$scope.$watch('result.entry.author.0.name.$t', function(newValue, old) {
								// console.log("Zmiana " + video.entry.title.$t + " na " + newValue);
							})
							$scope.$watch('result.entry.content.$t', function(newValue, old) {
								// console.log("Zmiana " + video.entry.content.$t + " na " + newValue);
							})

					$location.path("/witaj");
					}
					$location.path("/witaj");
				}
				$location.path("/witaj");

			};
			//});
			//$location.path("/witaj");
    }]);

		// bestgameApp.controller('ShowVideoCtrl', ['$scope', '$routeParams', '$http',
		// 		function ($scope, $routeParams, $http, $rootScope) {
		// 			console.log('result = ' + result)
		// 			$http.get('phones/testing.json').success(function (data) {
		// 				for (var i = 0; i < data.length; i++) {
		// 						if ($routeParams.videoId === data[i].entry.id.$t.slice(42, 53)) {
		// 								$scope.video = data[i];
		// 								break;
		// 						}
		//
		// 				}
		// 			});
		// 		}]);

bestgameApp.controller('listaYT', function ($scope, $rootScope, $location) {
    var temp = new Array();
    $scope.szukajVideo = function () {
        $.ajax({
            url: "https://gdata.youtube.com/feeds/api/videos?q=" + $scope.szukaneVideo + "&alt=json&max-results=5",
            dataType: 'json',
            async: false,
            success: function (data) {
							console.log('data = ' + data)
							console.log('temp przed '+temp)
							for(var i=0;i < 5 ;i++){
                temp.push(new Object(data.feed.entry[i]));
								console.log(data.feed.entry[i])
								console.log('temp = ' + temp)
							}
            }
        });
    };
		console.log('asd' + temp);
    $scope.dodajzYT = function (temp) {

        $.ajax({
          //  url: "https://gdata.youtube.com/feeds/api/videos/" + link + "?&prettyprint=true&alt=json",
					//	R4AQGVwWtPM
						url: "https://gdata.youtube.com/feeds/api/videos/i9MHigUZKEM?&prettyprint=true&alt=json",
            dataType: 'json',
            async: false,
            success: function (data) {
							console.log('data = ' + data)
                result.push(new Object(data));
            }
        });
        $rootScope.a = result;
        $location.path("#/witaj");
    };
    $scope.videos = temp;
		console.log('temp = ' + temp)
		// $scope.dodajzYT = function () {
		// 	console.log('result = ' + result)
		// 		var link = $scope.asd;
		// 		console.log('asd = ' + $scope.asd)
		// 		var id = "";
		// 				id = link.slice(42, 53);
		//
		// 				$.ajax({
		// 				url: "https://gdata.youtube.com/feeds/api/videos/" + id + "?&prettyprint=true&alt=json",
		// 				dataType: 'json',
		// 				async: false,
		// 				success: function (data) {
		// 					console.log('data = ' + data)
		// 						$rootScope.a.push(new Object(data));
		// 						$location.path("/witaj")
		// 						console.log(data)
		// 				}
		// 		});
		//
		// };
});


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
				console.log('videoLink' + $scope.videoLink)
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
     //$location.path("#/wiecej")
});
