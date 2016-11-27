var app = angular.module('myApp',['routes','ngMaterial','ngMdIcons','ngAnimate','angular-loading-bar', 'LocalStorageModule','toastr']);
app.run( function($rootScope, $state) {
    $rootScope.currentUser = {};
    $rootScope.cart = [];
    $rootScope.total = 0;
    $rootScope.product = {};
    $rootScope.creditCard = {};
    $rootScope.products = [
        {
            id: 1,
            name:"iPhone 7",
            price: 699.99,
            description:"iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colourful iPhone display. Splash and water resistance. And it looks every bit as powerful as it is. This is iPhone 7.",
            imageUrl:"static/images/iphone7_black.jpg",
            specs :{
                brand: "Apple",
                color: "Black",
                capacity: "32GB",
            }
        },
        {
            id: 2,
            name:"iPhone 7",
            price: 699.99,
            description:"iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colourful iPhone display. Splash and water resistance.1 And it looks every bit as powerful as it is. This is iPhone 7.",
            imageUrl:"static/images/iphone7_gold.jpg",
            specs :{
                brand: "Apple",
                color: "Gold",
                capacity: "32GB",
            }
        },
        {
            id: 3,
            name:"Galaxy S7",
            price: 649.99,
            description:"Samsung Galaxy S7 and Samsung Galaxy S7 Edge are Android smartphones manufactured and marketed by Samsung Electronics. The S7 series is a successor to the 2015 Galaxy S6, S6 Edge and S6 Edge+, and was officially unveiled on 21 February 2016 during a Samsung press conference at Mobile World Congress, with a European and North American release scheduled for 11 March 2016.",
            imageUrl:"static/images/s7_black.jpg",
            specs :{
                brand:"Samsung",
                color:"Black",
                capacity: "32GB",
            }
        },
        {
            id: 4,
            name:"Macbook Pro",
            price: 1299.99,
            description:"It’s faster and more powerful than before, yet remarkably thinner and lighter. It has the brightest, most colourful Mac notebook display ever. And it introduces the Touch Bar — a Multi-Touch enabled strip of glass built into the keyboard for instant access to the tools you want, right when you want them. The new MacBook Pro is built on groundbreaking ideas. And it’s ready for yours.",
            imageUrl:"static/images/macbook_pro.jpg",
            specs :{
                brand: "Apple",
                color: "Grey",
                capacity: "128GB SSD",
                cpu: "Intel core i5",

            }
        },
        {
            id: 5,
            name:"Beats Studio By Dre",
            price: 249.99,
            description:"Light, sleek, strong, and comfortable, these Beats Studio over-ear headphones deliver music the way producers and engineers intended. The Beats Acoustic Engine puts you up close and personal with crisp, clean sounds, while the Adaptive Noise Cancelling technology balances your music and your surroundings so you can rock out without distraction.",
            imageUrl:"static/images/beats_black.jpg",
            specs:{
                brand: "Beats",
                color:"Black",
                style: "Over-Ear",
                wireless: "No",
            }
        },
        {
            id: 6,
            name:"Beats By Dre",
            price: 349.99,
            description:"Light, sleek, strong, and comfortable, these Beats Studio over-ear headphones deliver music the way producers and engineers intended. The Beats Acoustic Engine puts you up close and personal with crisp, clean sounds, while the Adaptive Noise Cancelling technology balances your music and your surroundings so you can rock out without distraction.",
            imageUrl:"static/images/beats_white.jpg",
            specs:{
                brand: "Beats",
                color:"White",
                style: "Over-Ear",
                wireless: "Yes",
            }
        },
        {
            id: 7,
            name:"Samsung UN55KU6300",
            price: 697.99,
            description:"Light, sleek, strong, and comfortable, these Beats Studio over-ear headphones deliver music the way producers and engineers intended. The Beats Acoustic Engine puts you up close and personal with crisp, clean sounds, while the Adaptive Noise Cancelling technology balances your music and your surroundings so you can rock out without distraction.",
            imageUrl:"static/images/samsung-UHD.jpg",
            specs:{
                backlight: "LED",
                color:"Black",
                'refresh rate': "120CMR (Effective)",
                inputs: "3 HDMI, 2 USB",
                resolution: "4K",
                dimensions: "55 inches"

            }
        }
    ];
    $rootScope.Users = [
        {
            id:1,
            username:"admin",
            role:"admin",
            password:"admin",
            isAdmin: true
        },
        {
            id:2,
            username: "hamidi",
            password: "1234",
            firstname:"Mehdi Mohamed",
            lastname:"Hamidi",
            email:"mehdi.hamidi@gmail.com",
            address: "1234 Rue Ahuntsic H4N 6K9",
            phone: "514-887-2594",
        }
    ];
})
app.factory('NotificationsFactory', ['$rootScope', '$mdDialog', 'toastr', function ($rootScope,$mdDialog, toastr) {
    var notificationManager = {};

    notificationManager.showSuccessToast = function(message){
        toastr.success(message);
    }
    notificationManager.showErrorToast = function(message){
        toastr.error(message);
    }
    notificationManager.showInfoToast = function(message){
        toastr.info(message);
    }
    notificationManager.showWarningToast = function(message){
        toastr.warning(message);
    }
    notificationManager.showDialog = function($event, templateUrl, clickOutsideToClose = true, escapeToClose = true){
        $mdDialog.show({
            targetEvent: $event,
            templateUrl: templateUrl,
            clickOutsideToClose: clickOutsideToClose,
            escapeToClose: escapeToClose
        });
    }

    return notificationManager;
}]);
app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
