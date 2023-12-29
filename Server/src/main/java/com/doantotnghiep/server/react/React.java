package com.doantotnghiep.server.react;

import lombok.Data;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@Document
public class React {
    @Id
    private String id;

    @Field
    @Getter
    private String authorId;

    @Field
    @Getter
    private String foodId;

    @Field
    @Getter
    private String comment;

    @Field
    @Getter
    private Integer rate;

    public React() {
        this.id = "";
        this.authorId = "";
        this.foodId = "";
        this.comment = "";
        this.rate = 0;
    }

    public React(String id, String authorId, String foodId, String comment, Integer rate) {
        this.id = id;
        this.authorId = authorId;
        this.foodId = foodId;
        this.comment = comment;
        this.rate = rate;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setAuthorId(String authorId) {
        this.authorId = authorId;
    }

    public void setFoodId(String foodId) {
        this.foodId = foodId;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public void setRate(Integer rate) {
        this.rate = rate;
    }
}
