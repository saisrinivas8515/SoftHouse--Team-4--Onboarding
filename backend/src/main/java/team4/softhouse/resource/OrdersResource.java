package team4.softhouse.resource;


import com.sun.istack.internal.NotNull;
import javassist.*;
import team4.softhouse.db.entity.Inventory;
import team4.softhouse.db.entity.Orders;
import team4.softhouse.process.OrdersProcess;

import javax.annotation.security.RolesAllowed;
import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

import static jersey.repackaged.com.google.common.base.Preconditions.checkNotNull;


@Path("/orders")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class OrdersResource {

    private OrdersProcess ordersProcess;

    public OrdersResource(OrdersProcess ordersProcess){
        this.ordersProcess = checkNotNull(ordersProcess);
    }


   /* @GET
    public Orders get(@QueryParam("type") String type) throws javassist.NotFoundException {
        System.out.println(type);
        return this.ordersProcess.getorders();
    }*/


   /* @GET
    @Path("/{id}")
    public Orders get() throws javassist.NotFoundException {
        return this.ordersProcess.getorders();
    }*/

   @POST
   public int OrderedProduct(Orders product) {return this.ordersProcess.create(product);}



}




