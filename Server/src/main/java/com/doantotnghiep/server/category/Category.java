package com.doantotnghiep.server.category;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.ArrayList;
import java.util.List;

@Data
@Document
public class Category {
    @Getter
    @Id
    private String id;

    @Getter
    @Field
    private String name;

    @Getter
    @Field
    private String description;

    @Field
    @Getter
    private List<String> listFoodId;

    public Category() {
        this.id = "";
        this.name = "";
        this.description = "";
        this.listFoodId = new ArrayList<>();
    }

    public Category(String id, String name, String description, List<String> listFoodId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.listFoodId = listFoodId;
    }


    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setListFoodId(List<String> listFoodId) {
        this.listFoodId = listFoodId;
    }
}
