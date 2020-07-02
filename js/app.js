(function() {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    $scope.items = ""
    $scope.message = "";
    $scope.itemscheck = function() {
      $scope.items = $scope.items.trim();

      if ($scope.items === "") {
        $scope.message = "Please enter data first.";
        $scope.notice = "danger";
      }
      else {
        var $itemsArray = $scope.items.split(",");
        var $length = $itemsArray.length;
        if ( ($length <= 3) || ($length == 4 && $itemsArray[3].trim() === "") ) {
          $scope.message = "Enjoy!";
          $scope.notice = "success";
        }
        else {
          $scope.message = "Too much!";
          $scope.notice = "warning";
        }
      }
    };
  }
})();