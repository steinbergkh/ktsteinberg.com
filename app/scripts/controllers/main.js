'use strict';

app.controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });


    $http.jsonp('http://codeivate.com/users/steinbergkh.json?callback=JSON_CALLBACK').then(function(codeivate) {
        $scope.codeivate = codeivate.data;
        console.log($scope.codeivate);
    });
  });
