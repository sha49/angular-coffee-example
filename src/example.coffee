angular.module('pernas.example', [])

angular.module('pernas.example')
  .directive 'example', ['$timeout', ($timeout) ->

  # snakeCase = (input) -> input.replace /[A-Z]/g, ($1) -> "_#{$1.toLowerCase()}"
  # isEmpty = (value) ->
  #   if angular.isArray(value)
  #     return value.length is 0
  #   else if angular.isObject(value)
  #     return false for key of value when value.hasOwnProperty(key)
  #   true

  restrict: 'E'
  template: 'HOLA {{name}}'
  controller: ['$scope', ($scope) ->
    $scope.name = 'Jaume'
  ]
]