'use strict';

app.controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
        'title': 'Resume',
        'link': '/resume'
    },{
        'title': 'Projects',
        'link': '/projects'
    },{
        'title': 'Resources',
        'link': '/resources'
    },{
        'title': 'Skydiving',
        'link': '/skydiving'
    },{
        'title': 'Contact',
        'link': '/contact'
    }];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
