module.exports = function($timeout) {
    return function(scope, element){
      $timeout(function(){
        $(element).slabText();
      },200);
    };
 };