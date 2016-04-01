myApp.controller('AddController', ['$scope', 'HeroFactory', function($scope, HeroFactory){
    var heroObject = {};
    var heroServ = HeroFactory;
    $scope.submit = function(data){
        heroServ.postData(data);
    };
}]);

myApp.controller('ListController', ['$scope', 'HeroFactory', function($scope, HeroFactory){
    var heroServ = HeroFactory;
    heroServ.getData();
    $scope.data = heroServ.data;
}]);
