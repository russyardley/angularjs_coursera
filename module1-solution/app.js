(function () {
  'use strict'

  angular.module ("LunchCheck", [])
  .controller ("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController ($scope) {
    $scope.lunchItems = "";
    $scope.lunchItemsStyle = "";
    $scope.message = "";
    $scope.messageStyle = "";

    $scope.checkLunchItems = function () {
      var result = checkLunchItems ($scope.lunchItems);
      $scope.lunchItemsStyle = result.lunchItemsStyle;
      $scope.message = result.message;
      $scope.messageStyle = result.messageStyle;
    }

    function checkLunchItems (lunchItems) {
      lunchItems = lunchItems || "";
      lunchItems = lunchItems.split(",").filter (function (item) {
        item = item || "";
        return item.trim () != "";
      });
      if (lunchItems.length == 0) return { "lunchItemsStyle": { "border-color" : "red" },
                                           "message": "Please enter data first",
                                           "messageStyle": { "color" : "red" } };
      var result = { "lunchItemsStyle": { "border-color" : "green" },
                     "messageStyle": { "color" : "green" } };
      if (lunchItems.length <= 3) result["message"] = "Enjoy!";
      else result["message"] = "Too much!";
      return result
    }
  }
}) ();
