function appConfig($routeProvider) {
    $routeProvider
        .when('/products', { template: '<products></products>' })
        .when('/info', { template: '<info></info>' })
        .when('/', { template: '<home></home>' })
        .when('/login', { template: '<login></login>' })
        .otherwise({
            redirectTo: '/'
        })
}