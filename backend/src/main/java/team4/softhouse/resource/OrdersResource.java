package team4.softhouse.resource;


import team4.softhouse.db.entity.Orders;
import team4.softhouse.process.InventoryProcess;
import team4.softhouse.process.OrdersProcess;

import javax.annotation.security.PermitAll;
<<<<<<< Updated upstream
=======
import javax.annotation.security.RolesAllowed;
import javax.validation.Valid;
>>>>>>> Stashed changes
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@PermitAll
@Path("/orders")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class OrdersResource {

    private OrdersProcess ordersProcess;
    private InventoryProcess inventoryProcess;

    /*public OrdersResource(OrdersProcess ordersProcess){
        this.ordersProcess = checkNotNull(ordersProcess);
    }*/

    public OrdersResource(OrdersProcess ordersProcess, InventoryProcess inventoryProcess) {
        this.ordersProcess = ordersProcess;
        this.inventoryProcess = inventoryProcess;
    }

   
   @GET
    public List<Orders> get(@QueryParam("type") String type) throws javassist.NotFoundException {
        System.out.println(type);
       if(type == null) {
       return this.ordersProcess.getorders();
    }
       return this.ordersProcess.getorders();
    }

   @POST
   public int OrderedProduct(Orders product) {return this.ordersProcess.create(product);}

<<<<<<< Updated upstream
/*    @DELETE
    @Path("/{id}")
    public void deleteOrder(@PathParam("id") Integer id) {
        this.ordersProcess.delete(id);
    }*/

    @PUT
    @Path("/{orderid}")
    public void updateOrder(@PathParam("orderid") Integer orderid, Orders data) {
        this.ordersProcess.updateOrder(orderid, data.getStatus());
        if(data.getStatus()==1){
        this.inventoryProcess.updateQuantity(data.getProductid());
    }
=======
//    @DELETE
//    @Path("/{id}")
//    public void deleteOrder(@PathParam("id") Integer id) {
//        this.ordersProcess.delete(id);
//    }
//
    @PUT
    @Path("/{orderid}")
    public Orders updateNote(@PathParam("orderid") Integer orderid, @Valid Orders orders)throws javassist.NotFoundException{
       return this.ordersProcess.update(orderid, orders);

>>>>>>> Stashed changes
    }
}




