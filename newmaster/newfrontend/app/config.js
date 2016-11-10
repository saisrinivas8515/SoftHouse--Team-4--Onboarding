function appConfig($routeProvider, $httpProvider) {
    $routeProvider
        .when('/products', {template: '<products></products>'})
        .when('/info', {template: '<info></info>'})
        .when('/', {template: '<home></home>'})
        .when('/login', {template: '<login></login>'})
        .otherwise({
            redirectTo: '/'
        });
    $httpProvider.interceptors.push('loginInterceptor');
}

var onlyLoggedIn = function ($location,$q,$cookies) {
    var deferred = $q.defer();
    var authdata = $cookies.get('authdata') || null;

    if (authdata!= null)
    {
        deferred.resolve();
    }
    else
    {
        deferred.reject();
        $location.url('/login');
    }
    return deferred.promise;
}