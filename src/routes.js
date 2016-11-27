var routesModule = angular.module('routes',['ui.router']);
routesModule.run(function($state) {
    // console.log("running inside routes.js");
});
routesModule.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
  .state('home',{
      url : '/',
      templateUrl : 'src/views/products.html'
  })
  .state('about',{
      url : '/about',
      templateUrl: 'src/views/about.html'
  })
  .state('products',{
      url : '/products',
      templateUrl : 'src/views/products.html'
  })
  .state('product',{
      url : '/details',
      templateUrl : 'src/views/product.html'
  })
  .state('cart',{
      url : '/cart',
      templateUrl : 'src/views/cart.html'
  })
  .state('checkout',{
      url : '/checkout',
      templateUrl : 'src/views/checkout.html'
  })
  .state('register',{
      url : '/register',
      templateUrl : 'src/views/register.html'
  })
  .state('login',{
      url : '/login',
      templateUrl : 'src/views/login.html'
  })
  .state('admin',{
      url : '/admin',
      templateUrl : 'src/views/admin.html'
  })
$urlRouterProvider.otherwise("/")
});
