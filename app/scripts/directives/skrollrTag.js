'use strict';

app.directive('skrollrTag', [ 'skrollrService',
    function(skrollrService){
        return {
            link: function($scope, element, attrs){
                skrollrService.skrollr().then(function(skrollr){
                    skrollr.refresh();
                });

                //This will watch for any new elements being added as children to whatever element this directive is placed on. If new elements are added, Skrollr will be refreshed (pulling in the new elements
                $scope.$watch(
                    function () { return element[0].childNodes.length; },
                    function (newValue, oldValue) {
                        if (newValue !== oldValue) {
                            skrollrService.skrollr().then(function(skrollr){
                                skrollr.refresh();
                            });
                        }
                    });
            }
        };
    }
]);