(function () {

  'use strict';

  require('angular');
  require('angular-route');
  require('angular-animate');
  require('../bower_components/slabText/js/jquery.slabtext.js');

  var homeCtrl = require('./controllers/homectrl');
  var aboutCtrl = require('./controllers/aboutctrl');
  var postCtrl = require('./controllers/postctrl');

  angular.module('SampleApp', ['ngRoute', 'ngAnimate'])

  .config([
    '$routeProvider',
    function($routeProvider) {
      // routes
      $routeProvider
        .when("/home", {
          templateUrl: "./views/home.html",
          controller: "HomeController"
        })
        .when("/about", {
          templateUrl: "./views/about.html",
          controller: "AboutController"
        })
        .when('/:postDir/:postYear/:postMonth/:postDay/:postName/', {
        templateUrl: function(urlattr){
            return urlattr.postDir+'/'+urlattr.postYear+'/'+urlattr.postMonth+'/'+urlattr.postDay+'/'+urlattr.postName+'/index.html';
        },
        controller: 'PostController'
        })
        .otherwise({
           redirectTo: '/home'
        });
    }
  ])
.config([
  '$interpolateProvider', function($interpolateProvider) {
    return $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
  }
])

  //Load controllers
  .controller('HomeController', ['$scope', homeCtrl])
  .controller('AboutController', ['$scope', aboutCtrl])
  .controller('PostController', ['$scope', postCtrl])

  //Load directives Header Directives
  .directive('blogSlabText', ['$timeout', require('./directives/blogSlabText')])
  .directive('blogHeader', [require('./directives/blogHeader')])
  .directive('blogNavBar', [require('./directives/blogNavBar')])
  .directive('blogNavItem', [require('./directives/blogNavItem')])

  //Load post directives
  .directive('blogThumbnailPost', [require('./directives/blogThumbnailPost')]);




}());