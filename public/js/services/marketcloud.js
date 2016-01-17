'use strict';

/**
 * @ngdoc service
 * @name boilerplateMarketcloudAngularApp.marketcloud
 * @description
 * # marketcloud
 * Service in the boilerplateMarketcloudAngularApp.
 */
angular.module('testYoAngularGrunt2App')
  .factory('marketcloud', ['$rootScope',function (root) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    console.log("Init marketcloud service");
    //marketcloud.public = '8e083835-eacd-4cb9-8d99-bfda3d991c4f'; //fat
    marketcloud.public = 'ba952728-a428-466b-94a3-72effb6c4ace';	//test trizzy
    return marketcloud;
  }]);
