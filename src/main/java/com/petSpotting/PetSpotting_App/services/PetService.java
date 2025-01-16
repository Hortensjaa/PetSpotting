package com.petSpotting.PetSpotting_App.services;


import com.petSpotting.PetSpotting_App.dbEntities.Pet;
import com.petSpotting.PetSpotting_App.dbEntities.User;
import com.petSpotting.PetSpotting_App.repositories.PetRepository;
import com.petSpotting.PetSpotting_App.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetService {
    @Autowired
    private PetRepository petRepo ;
    @Autowired
    private UserRepository userRepo ;

    public List<Pet> getAllPetsSorted() {
        return petRepo.findAllByOrderByIdDesc();
    }

    public void addPet(Pet pet) {
        petRepo.save(pet);
    }

    public Pet getPetById(String id) {
        return petRepo.findById(id).orElse(null);
    }

    public void deletePet(String id) {
        petRepo.deleteById(id);
    }

    public void addLike(String petId, String userId) {
        Pet pet = petRepo.findById(petId)
                .orElseThrow(() -> new RuntimeException("Pet not found with id: " + petId));
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));

        if (!pet.getLikes().contains(user)) {
            pet.getLikes().add(user);
            petRepo.save(pet);
        } else {
            pet.getLikes().remove(user);
            petRepo.save(pet);
        }
    }
}
