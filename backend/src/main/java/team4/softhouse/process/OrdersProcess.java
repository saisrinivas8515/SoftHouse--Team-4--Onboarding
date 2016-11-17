package team4.softhouse.process;

import javassist.NotFoundException;
import team4.softhouse.db.entity.Orders;


public interface OrdersProcess {

    int create(Orders product);
    //Orders getorders() throws NotFoundException;
}
