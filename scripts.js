var curColor = "";
var app = angular.module("myApp",[]);

app.controller("myCtrl",function($scope) {
  $scope.red = 255;
  $scope.green = 255;
  $scope.blue = 255;
  $scope.exact = true;
  $scope.update = function() {
    $scope.redHex = $scope.red.toString(16).padStart(2,0);
    $scope.greenHex = $scope.green.toString(16).padStart(2,0);
    $scope.blueHex = $scope.blue.toString(16).padStart(2,0);
    $scope.color = ("#" + $scope.redHex + $scope.greenHex + $scope.blueHex).toUpperCase();
    $scope.colors = {
      "background-color": $scope.color,
    };
    curColor  = ntc.name($scope.color);
    if(curColor[2] == true) {
      $scope.colorName = curColor[1];
      $scope.nearestColor = "None";
      $scope.exact = true;
    }
    else {
      $scope.colorName = "None";
      $scope.rgb = parseInt(curColor[0].slice(1, 3), 16) + ", " + parseInt(curColor[0].slice(3, 5), 16) + ", " + parseInt(curColor[0].slice(5, 7), 16);
      $scope.nearestColor = curColor[0] + " => " + curColor[1] + " (" + $scope.rgb + ")";
      $scope.exact = false;
    }
  }
  $scope.$watchGroup(['red', 'green', 'blue'], $scope.update);
  $scope.update();
});
