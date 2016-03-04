
'use strict';

var elementDirective = function($compile) {
  return {
      restrict: 'AE',
      replace: 'true',
    //  template: '<h3>Hello World!!</h3>',
      templateUrl: './button.html',

      link: function(scope, elem, attrs) {
      			 console.log("got link");


 		scope.add = function() {
     			console.log(scope);
     			elem.after($compile('<elem />')(scope));
 	    };

 	    scope.rem = function() {
     			console.log(scope);
     			elem.remove($compile('<elem />')(scope));
 	    };

  }
}
};


module.exports = elementDirective;