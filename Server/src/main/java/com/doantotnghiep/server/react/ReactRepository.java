package com.doantotnghiep.server.react;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReactRepository extends MongoRepository<React, String> {
}
