var simpleUIBuilderApp = angular.module("simpleUIBuilderApp", ['ngResource', 'ngRoute']);

simpleUIBuilderApp.controller("simpleUIBuilderController", [ "$scope", "$http", function ($scope, $http) {

	//Model For UI Builder 
	$scope.uiBuilderDataModel = {
		"text" : {
			"elemID" : "text",
			"elemLabel" : "Text Box",
			"elemCount" : 2
		},
		"radio" : {
			"elemID" : "radio",
			"elemLabel" : "Radio",
			"elemCount" : 2
		},
		"select" : {
			"elemID" : "select",
			"elemLabel" : "Select Box",
			"elemCount" : 2
		},
		"check" : {
			"elemID" : "check",
			"elemLabel" : "Check Box",
			"elemCount" : 2
		},
		"area" : {
			"elemID" : "area",
			"elemLabel" : "Text Area",
			"elemCount" : 2
		},
		"complete" : {
			"elemID" : "complete",
			"elemLabel" : "Auto Complete",
			"elemCount" : 0
		}
	}; 
	
	$scope.rangeRepeater = function(counterIndex) {
		return new Array(counterIndex);
	};
	
	$scope.updateUIBuilder = function(uiElemType, isElemAdded) {
		if ($scope.uiBuilderDataModel.hasOwnProperty(uiElemType)) {
			var uiElemDataModel = $scope.uiBuilderDataModel[uiElemType];

			if (isElemAdded) {
				uiElemDataModel.elemCount += 1;
			} else {
				uiElemDataModel.elemCount -= 1;
				if (uiElemDataModel.elemCount < 0)
					uiElemDataModel.elemCount = 0;
			}
		}

	}; 
	
	$scope.uiBuilderElemToggle = function(uiElemType, checkedFlag) {
		if ($scope.uiBuilderDataModel.hasOwnProperty(uiElemType)) {
			var uiElemDataModel = $scope.uiBuilderDataModel[uiElemType]; 
			
			if(checkedFlag) {
				uiElemDataModel.elemCount = 1;	
			} else {
				uiElemDataModel.elemCount = 0;
			}	
		}
	};
	
	$scope.clearUIBuilderModel = function() {
		for(uiElemType in $scope.uiBuilderDataModel) {
			$scope.uiBuilderDataModel[uiElemType].elemCount = 0;	
		}	
	};
	
}]);
