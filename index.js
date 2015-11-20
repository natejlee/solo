angular.module('chipCount', [])
	.controller('counter', function($scope){
		$scope.count = 0
		$scope.newGame = true;
		$scope.pot = 0;

		$scope.addChips = function(){
			$scope.newGame = false;
			$scope.count = $scope.initChips;
			$scope.initChips = '';
		}

		$scope.betChips = function() {
			$scope.count = $scope.count - $scope.bettedChips;
			$scope.pot = $scope.bettedChips;
			$scope.bettedChips = '';
		}

		$scope.gameOver = function(){
			$scope.count = 0;
			$scope.pot = 0;
			$scope.newGame = true;
			$scope.bettedChips = '';
			$scope.initChips = '';
			
		}



	})