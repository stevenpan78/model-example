var myApp = angular
	.module("myModule",[])
	.controller("myController",function($scope){
		$scope.message = 'Hello Angular!'
		$scope.country = 'Canada'
		$scope.para = 'lorem ipsum est ibenare dolor sit amet, consectetur'+
		'adipiscing elit. Nunc et porta lacus. Aliquam lacinia augue non purus'+
		'malesuada, eu varius risus eleifend. Maur';
	});