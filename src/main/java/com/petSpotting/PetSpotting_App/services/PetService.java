package com.petSpotting.PetSpotting_App.services;


import com.petSpotting.PetSpotting_App.dbEntities.Pet;
import com.petSpotting.PetSpotting_App.repositories.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetService {
    @Autowired
    private PetRepository petRepo ;

    public void addPet(Pet pet) {
        petRepo.save(pet);
    }

    public List<Pet> getAllPets() {
        return petRepo.findAll();
    }

    public Pet getPetById(String id) {
        return petRepo.findById(id).orElse(null);
    }

    public void deletePet(String id) {
        petRepo.deleteById(id);
    }
}
