// Generated by CoffeeScript 1.9.1
(function() {
  'use strict';
  var Just, Nothing, _bind, _unit;

  _bind = function(f) {
    switch (this) {
      case Nothing:
        return Nothing;
      default:
        return f(this.val);
    }
  };

  _unit = function(input) {
    return Object.freeze({
      val: input != null ? input : null,
      bind: _bind
    });
  };

  Nothing = _unit(null);

  Just = function(input) {
    if (input != null) {
      return _unit(input);
    } else {
      return Nothing;
    }
  };

  angular.module('pernas.example', []).directive('example', [
    '$timeout', function($timeout) {
      return {
        restrict: 'E',
        template: 'Hola {{nom}}, com va?',
        controller: [
          '$scope', function($scope) {
            $scope.name = "Jaume";
            $scope.MaybeName = Just("Enric");
            return $scope.nom = $scope.MaybeName.val;
          }
        ]
      };
    }
  ]);

}).call(this);
