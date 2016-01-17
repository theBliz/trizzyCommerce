'use strict';

/**
 * @ngdoc function
 * @name testYoAngularGrunt2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testYoAngularGrunt2App
 */

     app.controller('singleProductCtrl', ['$scope','marketcloud',function ($scope,marketcloud) {
     	var product_id=jQuery("#product_id").html()
     	console.log('singleProductCtrl running on id ',product_id)

     	marketcloud.products.getById(product_id, function (err, product) {
				if (err !== null) {
					alert("Critical error - Recupero prodotti");
				}else{
					$scope.product = product;
					marketcloud.categories.getById(product.category_id, function (err, category) {
						console.log('category', category)
	        			$scope.category_name_internal=category.name
	        			$scope.$apply()
	        		})
			        $scope.$apply();
			        console.log("$scope.product",$scope.product)
				}

     	})
	}])