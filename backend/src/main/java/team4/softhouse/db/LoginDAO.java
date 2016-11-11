package team4.softhouse.db;

import org.skife.jdbi.v2.sqlobject.*;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;
import team4.softhouse.db.entity.Login;

import java.util.List;

@RegisterMapperFactory(BeanMapperFactory.class)

public interface LoginDAO {

    @SqlUpdate("CREATE TABLE IF NOT EXISTS login(id int auto_increment primary key, username varchar(20), password varchar(20), role varchar(20))")
    public void createTable();


    @SqlQuery("SELECT * FROM login WHERE username= :username AND password = :password")
    // public User findUserByUsername(@Bind("username") String username,@Bind("password") String password);
    public Login findUserByUsername(@BindBean Login login);

}

