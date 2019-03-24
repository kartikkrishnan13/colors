var curColor = "";
var app = angular.module("myApp",[]);

app.controller("myCtrl",function($scope) {
  alert("You can edit the RGB values.");
  alert("You can change the RGB values using the range slider.");
  alert("You can click on the text 'Closest Color: ...' to update the RGB value to that color.");
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
      $scope.nRed = parseInt(curColor[0].slice(1, 3), 16);
      $scope.nGreen = parseInt(curColor[0].slice(3, 5), 16);
      $scope.nBlue = parseInt(curColor[0].slice(5, 7), 16);
      $scope.rgb = $scope.nRed + ", " + $scope.nGreen + ", " + $scope.nBlue;
      $scope.nearestColor = curColor[0] + " => " + curColor[1] + " (" + $scope.rgb + ")";
      $scope.exact = false;
    }
  }
  $scope.modifyValue = function() {
    $scope.red = $scope.nRed;
    $scope.green = $scope.nGreen;
    $scope.blue = $scope.nBlue;
    $scope.toast = "Color changed to " + curColor[1];
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function() {
      x.className = x.className.replace("show", "");
    }, 3000);
  }
  $scope.$watchGroup(['red', 'green', 'blue'], $scope.update);
  $scope.update();
});
