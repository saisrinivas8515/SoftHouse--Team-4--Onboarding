function appConfig($routeProvider) {
    $routeProvider
        .when('/', { template: '<products></products>' })
        .when('/info', { template: '<info></info>' })
        .when('/home', { template: '<home></home>' })
        .otherwise({
            redirectTo: '/'
        })
}