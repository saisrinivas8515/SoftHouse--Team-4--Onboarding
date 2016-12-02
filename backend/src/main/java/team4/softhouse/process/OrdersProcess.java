package team4.softhouse.process;

import javassist.NotFoundException;
import team4.softhouse.db.entity.Orders;

import javax.ws.rs.BadRequestException;
import java.sql.SQLDataException;
import java.util.List;


public interface OrdersProcess {

    int create(Orders product) throws BadRequestException;
    List<Orders> getorders() throws NotFoundException;
    /*void delete(Integer id);*/
    void updateOrder(Integer id, Integer status);
}
