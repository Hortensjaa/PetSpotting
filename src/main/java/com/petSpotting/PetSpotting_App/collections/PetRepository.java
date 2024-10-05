package com.petSpotting.PetSpotting_App.collections;

import com.petSpotting.PetSpotting_App.collections.Pet;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PetRepository extends MongoRepository<Pet, String>
{

}
