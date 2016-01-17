'use strict';

/**
 * @ngdoc function
 * @name testYoAngularGrunt2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testYoAngularGrunt2App
 */

     app.controller('multiProductController', ['$scope','marketcloud',function ($scope,marketcloud) {
     	var category_id=jQuery("#category_id").html()
     	console.log('multiProductController running on id ',category_id)

     	marketcloud.products.list({category_id:category_id}, function (err, products) {
				if (err !== null) {
					alert("Critical error - Recupero prodotti");
				}else{
					$scope.prodotti_selezionati = products;
			        $scope.$apply();
			        console.log("$scope.prodotti_selezionati",$scope.prodotti_selezionati)
				}

     	})
	}])