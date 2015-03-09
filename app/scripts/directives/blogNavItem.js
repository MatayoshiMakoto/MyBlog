module.exports = function() {
    return {
      restrict: 'E',
      templateUrl: '../views/templates/directives/blog-nav-item.html',
      require: '^blogNavBar',
      link: function(scope, element, attrs, blogNavCtrl) {
        scope.isActive = function() {
          return blogNavCtrl.getActiveNav() === scope.name;
        };

        scope.activate = function() {
          blogNavCtrl.setActiveNav(scope.name);
        };
      },
      scope: {
        name: "@" 
      }
    };
  };