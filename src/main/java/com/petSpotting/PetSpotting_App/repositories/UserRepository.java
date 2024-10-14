package com.petSpotting.PetSpotting_App.repositories;

import com.petSpotting.PetSpotting_App.dbEntities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
}
