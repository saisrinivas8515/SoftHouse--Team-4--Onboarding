<div class="container">
    <navigation class="row"></navigation>



    <div class="row">
        <product-form class="col-xs-12"></product-form>

        <div class="col-xs-12 text-center" ng-if="!vm.hasProducts()">
            <div class="alert alert-info" role="alert">
                <h4>There are no products yet!</h4>

            </div>
        </div>
    </div>

<form>
    <div class="row">
        <div class="col-xs-12">
            <table class="table">
                <thead>
                <tr>
                    <th>User ID</th>
                    <th>User Name</th>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Specifications</th>
                    <th>Product Category</th>
                </tr>
                </thead>

                <tbody>
                <tr ng-repeat="order in vm.allorders" >
                    <td>{{order.userid}}</td>
                    <td>{{order.username}}</td>
                    <td>{{order.productid}}</td>
                    <td>{{order.name}}</td>
                    <td>{{order.specifications}}</td>
                    <td>{{order.category}}</td>
                </tr>
                </tbody>

            </table>
        </div>
    </div>
</form>

    <div class="row">
        <product class="col-xs-12" ng-repeat="product in vm.products" data="product"></product>
    </div>


</div>