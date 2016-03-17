angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
    $scope.calcSimpleInterest = function(principle, term, rate) {
    var reqUrl = "http://192.168.0.11:8080/PallaviAssignment6/labassignment/calculate/si/"+principle+"/"+term+"/"+rate
    $http({
        method: 'GET',
        url: reqUrl
    })
    .success(function(response){
        console.log(response.SimpleInterest);
        $scope.calcStatus = true;
        $scope.message = "Simple Interest is "+response.SimpleInterest;
        return response.SimpleInterest;
    })
    }
    
    $scope.testSI = function(p,t,r) {
        var amt = p*t*r;
        var amt = amt/100;
        return amt;
    }
    
})

.controller('ChatsCtrl', function($scope, $http) {
    $scope.convertFahrenheit = function(kelvin) {
        var reqUrl = "http://192.168.0.11:8080/PallaviAssignment6/labassignment/metrics/kelvintoF/"+kelvin;
        $http({
            method: 'GET',
            url: reqUrl
        })
        .success(function(response) {
            console.log(response.Fahrenheit);
            $scope.convertStatus = true;
            $scope.message = kelvin + "K to Fahrenheit is " + response.Fahrenheit;
        })
    }
    
    $scope.testKtoF = function(k) {
        var k = (k - 273.15) * 1.8 + 32.0;
        k = Math.round(k);
        return k;
    }
    
    $scope.convertCelcius = function(kelvin) {
     var reqUrl = "http://192.168.0.11:8080/PallaviAssignment6/labassignment/metrics/kelvintoC/"+kelvin;
        $http({
            method: 'GET',
            url: reqUrl
        })
        .success(function(response) {
            console.log(response.Celcius);
            $scope.convertStatus = true;
            $scope.message = kelvin + "K to Celcius is " + response.Celcius;
        })
    }
    
    $scope.testKtoC = function(kelvin) {
        var c = kelvin - 273.15;
        return c;
    }
})


.controller('AccountCtrl', function($scope, $http) {
  $scope.calcCompoundInterest = function(principle, term, cnum, rate) {
      var reqUrl = "http://192.168.0.11:8080/PallaviAssignment6/labassignment/calculate/ci/"+principle+"/"+rate+"/"+cnum+"/"+term;
      $http({
          method: 'GET',
          url: reqUrl
      }).success(function(response){
          console.log(response.CompoundInterest);
          $scope.calcStatus = true;
          $scope.message = "Compound Interest is "+response.CompoundInterest
          return response.CompoundInterest;
      })
  }
  
  $scope.testCI = function(p,r,t,n) {
      var ci = p * (1+r/n);
      var temp = n*t;
      var ci = Math.pow(ci, temp);
      return ci;
  }
});
