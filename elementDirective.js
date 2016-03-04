
'use strict';

var elementDirective = function() {
  return {
      restrict: 'AE',
      replace: 'true',
    //  template: '<h3>Hello World!!</h3>',
      templateUrl: './button.html',

      link: function(scope, elem, attrs) {
 		// Execute this function when advanced search button is pressed
 		scope.submit = function() {
     			console.log(scope);
 	    };

 		 console.log("dir");

  }
}
};


module.exports = elementDirective;