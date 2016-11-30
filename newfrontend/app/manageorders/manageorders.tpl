<!--<div class="container">-->
    <!--<div class="bgimg-5">-->

        <!--<div class="caption">-->
            <!--<span class="border" style="alignment: top">ORDERS PLACED</span>-->
        <!--</div>-->

    <navigation class="row"></navigation>

    <form>
        <div class="row" style="font-size: large">
            <div style="color: black"></div>
            <h1 class="text-center">Orders Placed</h1>
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
                    <tr ng-repeat="order in vm.orders" ng-if="order.status==0" >
                        <td>{{order.userid}}</td>
                        <td>{{order.username}}</td>
                        <td>{{order.productid}}</td>
                        <td>{{order.name}}</td>
                        <td>{{order.specifications}}</td>
                        <td>{{order.category}}</td>
                        <td> <button type="submit" class="btn btn-xs btn-success" ng-click="vm.acceptOrder(order.orderid,order.productid)"><i class="fa fa-check" aria-hidden="true"></i> Accept Order</button> </td>
                        <td> <button type="submit" class="btn btn-xs btn-danger" ng-click="vm.rejectOrder(order.orderid,order.productid)"><i class="fa fa-times" aria-hidden="true"></i> Reject Order</button> </td>
                    </tr>
                    </tbody>

                </table>
            </div>
        </div>
    </form>