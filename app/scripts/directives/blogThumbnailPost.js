module.exports = function() {
    return {
      restrict: 'E',
      templateUrl: '../views/templates/directives/blog-thumbnail-post.html',
      link: function(scope, element, attrs) {
        
      },
      scope: {
        post: "="
      },
      controller: ['$scope','$location', function($scope, $location) {
        $scope.goTo = function(url){
          $location.path(url);
        };
      }]
    };
  };