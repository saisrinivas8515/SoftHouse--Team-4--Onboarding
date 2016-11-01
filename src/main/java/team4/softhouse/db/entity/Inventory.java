package team4.softhouse.db.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;


public class Inventory {
    @JsonProperty
    private Integer id;

    @JsonProperty
    @NotEmpty
    @Length(max = 12, message = "must not be longer than 12 characters")
    private String name;

    @JsonProperty
    @NotEmpty
    @Length(min = 8, message = "must contain atleast 8 characters")
    private String category;

    public Inventory() {}

    public Inventory(Integer id, String name, String category) {
        this.id = id;
        this.name = name;
        this.category = category;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category =category;
    }
}