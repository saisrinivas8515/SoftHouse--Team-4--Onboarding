<div class="row clearfix">
<nav class="navbar navbar-inverse navbar-fixed-top">

  <div class="container-fluid">
    <div class="navbar-header-fixed-top">
      <a  class="navbar-brand" href="#/" ><b>SOFTHOUSE</b></a>
    </div>

    <ul class="nav navbar-nav">
      <li><a  href="#/viewproducts"ng-if="(vm.hasCookies())" >Products</a></li>
      <li><a href="#/manage" ng-if="(vm.hasCookies() && vm.role == 'Admin')">Manage Products</a></li>
      <li><a href="#/manageorders" ng-if="(vm.hasCookies() && vm.role == 'Admin')">Manage Orders</a></li>
      <li><a href="#/processedorders" ng-if="(vm.hasCookies() && vm.role=='Admin')">Orders Log</a></li>
      <li><a href="#/orderhistory" ng-if="(vm.hasCookies() && vm.role=='Employee')">Cart</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
       <li><a href="#/login" ng-if="!vm.hasCookies()"> LOGIN</a></li>
       <li  ng-if="vm.hasCookies()"><a type = "btn" ng-click="vm.onlogout()"> <b>LOGOUT</b></a></li>
    </ul>
    </div>
</nav>
</div>
