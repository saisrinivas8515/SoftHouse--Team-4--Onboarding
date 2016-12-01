package team4.softhouse.db;


import org.skife.jdbi.v2.sqlobject.*;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;
import team4.softhouse.db.entity.Orders;

import java.util.List;

@RegisterMapperFactory(BeanMapperFactory.class)
public interface OrdersDAO {

<<<<<<< Updated upstream
    @SqlUpdate("CREATE TABLE IF NOT EXISTS orders(orderid int auto_increment primary key, productid int, userid int, username varchar(200), name varchar(200), category varchar(200), specifications varchar(2000), status int, UNIQUE(productid,userid))")
=======
    @SqlUpdate("CREATE TABLE IF NOT EXISTS orders(orderid int auto_increment primary key, productid int, userid int, username varchar(200), name varchar(200), category varchar(200), specifications varchar(500), UNIQUE(productid,userid),status int(11))")
>>>>>>> Stashed changes
    void createTable();

    @SqlUpdate("INSERT INTO `orders` VALUES(:orderid, :productid, :userid, :username, :name, :category, :specifications, :status)")
    @GetGeneratedKeys
    int create(@BindBean Orders product);

   @SqlQuery("SELECT * FROM `orders`")
   List<Orders> get();

<<<<<<< Updated upstream
    @SqlUpdate("UPDATE `orders` set status = :status WHERE orderid = :id")
    int updateBy(@Bind("id") int id, @Bind("status") int status);
=======
    @SqlQuery("select * from orders WHERE status = :status ;")
    public List<Orders> getStatus(@Bind("status") int status);

    @SqlUpdate("UPDATE orders SET status=0 WHERE orderid = :orderid ;")
    public void updateOrders(@Bind("orderid") int orderid);

    @SqlUpdate("UPDATE orders SET status=1 WHERE orderid = :orderid ;")
    public void updateOrders(@Bind("orderid") int orderid);

    @SqlUpdate("UPDATE orders SET status=2 WHERE orderid = :orderid ;")
    public void updateOrders(@Bind("orderid") int orderid);


    //@SqlUpdate("DELETE FROM `orders` WHERE orderid = :id")
    //int deleteBy(@Bind("id") int id);
>>>>>>> Stashed changes

}
