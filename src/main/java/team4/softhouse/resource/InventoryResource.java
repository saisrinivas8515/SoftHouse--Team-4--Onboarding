package team4.softhouse.resource;

import static com.google.common.base.Preconditions.checkNotNull;

import team4.softhouse.db.InventoryDAO;
import team4.softhouse.db.entity.Inventory;
//import team4.softhouse.process.NoteProcess;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;


@Path("/inventory")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class InventoryResource {
    private InventoryDAO inventoryDAO;

    public InventoryResource(InventoryDAO inventoryDAO) {
        this.inventoryDAO = checkNotNull(inventoryDAO);
    }

    @GET
    public List<Inventory> listNotes() {
        return this.inventoryDAO.list();
    }

    @GET
    @Path("/category/{cat}")
    public Inventory getNote(@PathParam("cat") String cat) {
        return this.inventoryDAO.findByCat(cat);
    }

    @GET
    @Path("/{id}")
    public Inventory getNote(@PathParam("id") Integer id) {
        return this.inventoryDAO.findBy(id);
    }

    @POST
    public int createNote(@NotNull @Valid Inventory inventory) {
        return this.inventoryDAO.create(inventory);
    }

    @PUT
    @Path("/{id}")
    public int updateNote(@PathParam("id") Integer id, @Valid Inventory inventory) {
        return this.inventoryDAO.update(id, inventory);
    }

    @DELETE
    @Path("/{id}")
    public void deleteNote(@PathParam("id") Integer id) {
        this.inventoryDAO.deleteBy(id);
    }
}
