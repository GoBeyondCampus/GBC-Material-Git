/**
 * 
 */
angular.module('gbcApp').controller('autoTag', ['$scope','$http',function($scope,$http) {
				$scope.selectedInterests = [];
				
				$scope.interestOptions = [];
				$http.get('interests.js').success(function(data) {
					$scope.interestOptions = data;
				}).error(function(status) {
					console.log("Error Occurred");
				})
				
				$scope.filterInt = $scope.interestOptions;
				
				$scope.fillInt = function(interest){
					
					if ($scope.selectedInterests.hasOwnProperty("subDisc")) {
						//do nothing
					}else {
						$scope.selectedInterests = [];
					}
					
					$scope.selectedInterests.push(interest);
					$scope.hidethisfunc = true;
				 }
				
				$scope.completeInt = function(searchString){
					 var output = [];
					 var intName = searchString.toString().toLowerCase();
					 console.log(intName);
					 angular.forEach($scope.interestOptions, function(interest) {
						
					 	if (interest.discipline.name.toLowerCase().indexOf(intName) >= 0) {
							output.push(interest);
						}
					 });
					 $scope.filterInt = output;
				 }
				
				
			   $scope.completeSubInt = function(selectedInterest) {
				    var subIntList = [];
				    var intName = selectedInterest.toString().toLowerCase();
				    console.log(intName);
			}	
			}]);