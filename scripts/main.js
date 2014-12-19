(function(){
  angular.module('Portfolio',['ngRoute'])
  .config(function($routeProvider){

    $routeProvider.when('/',{
       templateUrl:'home.html',
       controller: 'HomeController'
    });

  });
}());

(function(){
  angular.module('Portfolio')
  .controller('HomeController'['$location',function( $location ){

  }
  ]);
}());
