
angular.module('myApp')
.controller('myController', function ($scope) {
  var customers = [
    { name: "Harley",  account: "M46C22",
      pin: 2468,      balance: 200000 },
    { name: "Heaven",  account: "H4VE5N",
      pin: 1234,      balance: 150000 }
  ];
  
  $scope.authenticated = false;
  
  $scope.findAccount = function() {
    $scope.customer = _.find(customers, function(customer) {
      return customer.account == $scope.accountNumber;
    });
    if ($scope.customer) {
      $scope.accountFound = true;
    }
  };
  
  $scope.checkPin = function() {
    if ($scope.customer.pin == $scope.pin) {
      $scope.authenticated = true;
    } else {
      $scope.invalidPin = true;
    }
  };
  
  $scope.balance = function() {
    $scope.processMessage = 'Current balance: ' + $scope.customer.balance;
  }
});