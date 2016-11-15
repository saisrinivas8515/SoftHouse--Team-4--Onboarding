angular.module('app', ['ngRoute', 'ngCookies'])
    .factory('productService', productService)
    .factory('loginService', loginService)
    .factory('loginInterceptor', loginInterceptor)
    // .factory('orderService', orderService)
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

   /* .component('admin-order',{
        templateUrl: 'app/admin-order/order.tpl',
        controller: OrderController,
        controllerAs: 'vm',

        require: {
            navigationController: '^?navigation'
        },
        bindings:{
            data: '<'
        }
})*/
    .config(appConfig)
    .run(run);

function run($http, $cookies){

    var authdata = $cookies.get('authdata') || null;

    if (authdata!= null){

        $http.defaults.headers.common['Authorization'] = 'Basic' + authdata;
    }
}
