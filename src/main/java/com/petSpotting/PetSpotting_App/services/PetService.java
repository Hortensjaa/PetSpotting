package com.petSpotting.PetSpotting_App.services;


import com.petSpotting.PetSpotting_App.collections.Pet;
import com.petSpotting.PetSpotting_App.repositories.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetService {
    @Autowired
    private PetRepository petRepo ;

    public Pet addPet(Pet pet) {
        return petRepo.save(pet);
    }

    public List<Pet> getAllPets() {
        return petRepo.findAll();
    }

    public Pet getPetById(Long id) {
        return petRepo.findById(id).orElse(null);
    }

}
