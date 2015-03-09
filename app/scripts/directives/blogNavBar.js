module.exports = function() {
    return {
    restrict: 'E',
    // templateUrl: '../views/templates/directives/blog-nav-bar.html',
    controller: ['$scope', function($scope) {
        $scope.activeNav = 'Home';
        
        this.getActiveNav = function(){
          return $scope.activeNav;
        };
        
        this.setActiveNav = function(value){
          $scope.activeNav = value;
        };
        
        return this;
      }]
    };
  };