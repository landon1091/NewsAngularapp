let app = angular.module('NewsApp', []);

app.factory('NewsFactory', function ($http) {
    let newslt = []; //  full list
    // let shownews = []; // news to show

    $http({
        method: "GET",
        url: 'http://puzzlegram.herokuapp.com/news'
    }).then(function (response) {
        angular.copy(response.data.news, newslt);
        for (let i = 0; i < newslt.length; i++) {
            newslt[i].hide = false;
            newslt[i].favorite = false;
        }
    });
    return {
        // all the news
        newsman: function () {
            return newslt;
        },
    }
});

app.component('news', {
    templateUrl: 'components/news.html',
    controller: 'articleController',
    bindings: {
        stuff: '<',
    }
})
app.component('favorites', {
    templateUrl: 'components/favorites.html',
    controller: 'articleController',
    bindings: {
        fav: '<',
    }
})

app.controller('articleController', function ($scope, NewsFactory) {
    $scope.getnews = NewsFactory.newsman();
    $scope.hide = function (x) {
        x.hide = true;
    }
    $scope.favarray = [];
    console.log($scope.favarray);
    $scope.favorite = function (y) {
    
        for(let i = 0; i < $scope.getnews.length; i++){
            if($scope.getnews[i] === true){
                $scope.favarray.push($scope.getnews[i]);
            }
        }
    }
})
// app.controller('favoriteController', function ($scope, NewsFactory){
//     $scope.favorite = [];
//     $scope.getnews = NewsFactory.newsman();
//     $scope.favbutton = function (y) {
//         y.favorite = true;
//     }
// })



