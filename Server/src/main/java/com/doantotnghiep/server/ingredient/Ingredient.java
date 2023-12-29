package com.doantotnghiep.server.ingredient;

import lombok.Data;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.ArrayList;
import java.util.List;

@Data
@Document
public class Ingredient {
    @Id
    private String id;

    @Field
    @Getter
    private String name;

    @Field
    @Getter
    private List<String> foodIds;

    public Ingredient() {
        this.id = "";
        this.name = "";
        this.foodIds = new ArrayList<>();
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setFoodIds(List<String> foodIds) {
        this.foodIds = foodIds;
    }
}
