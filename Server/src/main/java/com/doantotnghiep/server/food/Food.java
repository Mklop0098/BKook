package com.doantotnghiep.server.food;

import lombok.Data;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@Document
public class Food {
    @Id
    private String id;

    @Field
    @Getter
    private String name;

    @Field
    @Getter
    private String description;

    @Field
    @Getter
    private Integer time;

    @Field
    @Getter
    private Date createdAt;

    @Field
    @Getter
    private List<String> instructions;

    @Field
    @Getter
    private List<String> ingredientIds;

    @Field
    @Getter
    private List<String> categoryIds;

    @Field
    @Getter
    private String image;

    @Field
    @Getter
    private String authorId;
    public Food() {
        this.id = "";
        this.name = "";
        this.description = "";
        this.time = 0;
        this.createdAt = new Date();
        this.instructions = new ArrayList<>();
        this.ingredientIds = new ArrayList<>();
        this.categoryIds = new ArrayList<>();
        this.image = "";
        this.authorId = "";
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

    public void setTime(Integer time) {
        this.time = time;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public void setInstructions(List<String> instructions) {
        this.instructions = instructions;
    }

    public void setIngredientIds(List<String> ingredientIds) {
        this.ingredientIds = ingredientIds;
    }

    public void setCategoryIds(List<String> categoryIds) {
        this.categoryIds = categoryIds;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
