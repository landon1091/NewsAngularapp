(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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




},{}]},{},[1])