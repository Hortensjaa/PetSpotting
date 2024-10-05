package com.petSpotting.PetSpotting_App.collections;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PetRepository extends MongoRepository<Pet, String>
{

}
