'use strict';

/**
 * @ngdoc function
 * @name testYoAngularGrunt2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testYoAngularGrunt2App
 */
var app=angular
        .module('testYoAngularGrunt2App',[]);
     app.controller('MainCtrl', ['$scope','marketcloud',function ($scope,marketcloud) {
              console.log('MainCtrl running')
              $scope.slidesContent=[
              						{
              							title : 'iPhone 6s Plus',
              							subtitle: '16 GB Gold',
              							image: '/img/slider_home/slider_iphone.jpg',
              							callToAction: 'Acquista Ora',
              							link: '',
              							dataTransition:'fade',
              							path: '/product/11403'
              						},{
              							title : 'LG Nexus 5X',
              							subtitle: '32 GB White',
              							image: '/img/slider_home/slider_nexus.jpg',
              							callToAction: 'Acquista Ora',
              							link: '',
              							dataTransition: 'zoomout',
              							path: '/product/11418'
              						},{
              							title : 'Asus Zenfone 2',
              							subtitle: '32 GB + cover',
              							image: '/img/slider_home/slider_zenfone2.jpg',
              							callToAction: 'Acquista Ora',
              							link: '',
              							dataTransition: 'fadetotopfadefrombottom',
              							path: '/product/11411'
              						}
              ]
              	//Funzione per recuperare i prodotti dello store
			    marketcloud.products.list({}, function (err, products) {
			      if (err !== null) {
			        alert("Critical error - Recupero prodotti");
			      } else {
			        $scope.products = products;
			        $scope.$apply();
			        /*if ($scope.products.length !== products.length) {
			          alert("Critical error - Recupero prodotti");
			        }*/
			        console.log("product List " ,$scope.products);
			        
			        $scope.nuovi_arrivi=[]
			        $scope.products.forEach(function(e){
			        	if(e.nuovi_arrivi){
			        		marketcloud.categories.getById(e.category_id, function (err, category) {
			        			e.category_name=category.name
			        		})
			        		$scope.nuovi_arrivi.push(jQuery.extend(true,{},e))
			        		$scope.$apply();
			        	}
			        })
			        console.log("nuovi_arrivi List " ,$scope.nuovi_arrivi);

			        $scope.best_sellers=[]
			        $scope.products.forEach(function(e){
			        	if(e.best_seller){
			        		$scope.best_sellers.push(jQuery.extend(true,{},e))
			        		$scope.$apply();
			        	}
			        })
			        console.log("best_seller List " ,$scope.best_sellers);

			        $scope.ratings=[]
			        $scope.products.forEach(function(e){
			        	if(e.rating){
			        		$scope.ratings.push(jQuery.extend(true,{},e))
			        		$scope.$apply();
			        	}
			        })
			        console.log("ratings List " ,$scope.ratings);

			        $scope.weekly_sales=[]
			        $scope.products.forEach(function(e){
			        	if(e.weekly_sale_price){
			        		$scope.weekly_sales.push(jQuery.extend(true,{},e))
			        		$scope.$apply();
			        	}
			        })
			        console.log("weekly_sales List " ,$scope.weekly_sales);
			      }
			    });

			    //Funzione per recuperare le categorie dallo store
			    marketcloud.categories.list({}, function (err, categories) {
			      if (err !== null) {
			        alert("Critical error - Recupero categories");
			      } else {
			        $scope.categories = categories;
			        $scope.$apply();
			        if ($scope.categories.length !== categories.length) {
			          alert("Critical error - Recupero categories");
			        }
			        console.log("categories List " ,$scope.categories);
			      }
			    });
          }]);
