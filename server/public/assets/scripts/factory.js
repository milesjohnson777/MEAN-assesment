myApp.factory('HeroFactory', ['$http', function($http){
    var data = {};

    var getData = function(){
        $http.get('/hero').then(function(response){
            data.results = response.data;
        });
    };

    var postData = function(data){
        $http.post('/hero', data).then(function(response){
            getData();
        });
    };

    return {
        postData: postData,
        getData: getData,
        data: data
    }
}]);
