 /***This is a To Do List project developed for a curricular component Information Systems 1, Computer Science, UFCG.***/
 /*** Built by Priscilla de Sales Brito | 2016 ***/
 
 /* ANGULAR MODULE */
 var app = angular.module("myToDoList", []);

 /* ANGULAR CONTROLLER */
 app.controller("controlToDoList", function($scope) {
	$scope.tasksToDo = ['Do LAB2.', 'Cook some pasta.', 'Run.'];
	$scope.tasksDone = [];
   
	$scope.getTotal = function () {
		return $scope.tasksToDo.length;
	};
	
	$scope.getFeitas = function () {
		return $scope.tasksDone.length;
	};

	//ADD VALID TASKS.
	$scope.addItem = function() {
		$scope.errorText = "";	 
		if (!$scope.addMe) {
			return;
		};
		if ($scope.tasksToDo.indexOf($scope.addMe) == -1) {
			$scope.tasksToDo.push($scope.addMe);
			$scope.addMe = "";	   
		} else {
			$scope.errorText = "This item has already been added.";
		}
	}
   
	//CHECK AND UNCHECK TASKS.
	$scope.checkTask = function(index) {
		$scope.tasksDone.push($scope.tasksToDo.splice(index, 1).join());
	}
   
	$scope.uncheckTask = function(index) {
		$scope.tasksToDo.push($scope.tasksDone.splice(index, 1).join());
	}
   
   //REMOVE TASKS DEFINITELY.
	$scope.removeFromToDo = function(index){
		$scope.tasksToDo.splice(index, 1);  		
	}
  
	$scope.removeFromDone = function(index){
		$scope.tasksDone.splice(index, 1);  		
	}
  
 });