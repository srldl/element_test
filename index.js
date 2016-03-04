



'use strict';

// @ngInject
var angular = require('angular');

var app = angular.module('element_test',[]);

app.directive('elem', require('./elementDirective'));
app.controller('elementCtrl', require('./elementCtrl'));
