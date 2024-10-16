package com.petSpotting.PetSpotting_App.repositories;

import com.petSpotting.PetSpotting_App.dbEntities.Pet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PetRepository extends JpaRepository<Pet, String> {
}
