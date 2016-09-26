 let app = angular.module('BookApp', []);
  
// Name of component must match name of HTML tag
app.component('book', {
    templateUrl: 'components/book.html',
    // When using a <book>, users can specify readable="???"
    bindings: {
        readable: '<',
    },
});

  app.controller('CheckoutController', function ($scope, BookService) {
      $scope.books = BookService.getBooks();
      $scope.username = '';
  })