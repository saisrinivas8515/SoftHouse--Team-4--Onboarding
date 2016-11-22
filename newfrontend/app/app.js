angular.module('app', ['ngRoute', 'ngCookies'])
    .factory('manageService', manageService)
    .factory('loginService', loginService)
    .factory('loginInterceptor', loginInterceptor)
    .factory('orderService', orderService)
    .component('productForm', {
        templateUrl: 'app/product-form/product-form.tpl',
        controller: ProductFormController,
        controllerAs: 'vm',

        require: {
            productsController: '^products',
            navigationController: '^?navigation'
        },

        bindings: {
            data: '<',
            onSubmit: '<',
            onReset: '<'
        }
    })
    .component('product', {
        templateUrl: 'app/product/product.tpl',
        controller: ProductController,
        controllerAs: 'vm',

        require: {
            productsController: '^products',
            navigationController: '^?navigation'
        },

        bindings: {
            data: '<'
        }
    })
    .component('products', {
        templateUrl: 'app/products/products.tpl',
        controller: ProductsController,
        controllerAs: 'vm',

        require: {
            navigationController: '^?navigation'

        }
    })

    // .component('navigation1', { "templateUrl": 'app/navigation/navigation1.tpl'})
    .component('info', {
        templateUrl: 'app/info/info.tpl',
        controller: InfoController,
        controllerAs: 'vm',

        require: {
            navigationController: '^?navigation'

        }
    })
    .component('home', {templateUrl: 'app/home/home.tpl',

        require: {
            navigationController: '^?navigation'

        }
    })
    .component('login', {
        templateUrl: 'app/login/login.tpl',
        controller: LoginController,
        controllerAs: 'vm',

        require: {
            navigationController: '^?navigation'

        },
        bindings: {
            data: '<',
            onSubmit: '<'
        }
    })

    .component('navigation', {
        templateUrl: 'app/navigation/navigation.tpl',
        controller: NavigationController,
        controllerAs: 'vm'
    })

    .config(appConfig)
    .run(run);


function run($http, $cookies){

    var authdata = $cookies.get('authdata') || null;

    if (authdata!= null){

        $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
    }
}
