app.controller('productController',function($scope, $location, $rootScope, $window, $state, $stateParams, $mdDialog, NotificationsFactory){
    $scope.login = function(user){
        for (var i = 0; i < $rootScope.Users.length; i++) {
            if(user.username == $rootScope.Users[i].username && user.password == $rootScope.Users[i].password){
                $rootScope.isAuthenticated = true;
                $rootScope.currentUser = $rootScope.Users[i];
                $state.go("products")
            }
        }

    }
    $scope.logout = function(){
        $rootScope.currentUser = {};
        $rootScope.isAuthenticated = false;
        $state.go("products")
    }
    $scope.register = function(user){
        $rootScope.Users.push(user);
        $state.go("login")
    }
    $scope.addToCart = function(product){
        $rootScope.cart.push(product);
        $rootScope.total = $rootScope.total + product.price;
        NotificationsFactory.showSuccessToast("Item successfuly added to cart!");
    }
    $scope.removeFromCart = function(index){
        $rootScope.cart.splice(index,1);
        $rootScope.total = $rootScope.total - $rootScope.products[index].price;
        NotificationsFactory.showSuccessToast("Item successfuly removed from cart!");
    }
    $scope.showProduct = function($event, product){
        $rootScope.product = product;
        $state.go("product");
    }
    $scope.close = function(){
        $mdDialog.hide();
    }
    $scope.addnewProduct = function (newProduct){
        newProduct.id = $rootScope.products.length +1;
        $rootScope.products.push(newProduct);
        NotificationsFactory.showSuccessToast("New product added successfuly!");
        $scope.close();
        $state.reload();

    }
    $scope.showAdd = function($event) {
        var tmpUrl = "src/views/addProductDialog.html";
        NotificationsFactory.showDialog($event, tmpUrl);
    };
});
