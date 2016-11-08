function loginService($http, $interpolate, $cookies) {
    var logindata = $interpolate('/app/login')

    return {

        verify: verify

    };
    function verify(username, password) {
        var data ={

            username: username,
            password: password
        };

        return $http.post(logindata(), data)

    }
}