package com.petSpotting.PetSpotting_App.services;


import com.petSpotting.PetSpotting_App.collections.Pet;
import com.petSpotting.PetSpotting_App.collections.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class PetService {
    @Autowired
    private PetRepository petRepo;

    public Pet addPet(Pet pet) throws Exception
    {
        if(pet != null)
        {
            pet.setTimeSpotted(LocalDateTime.now());
            return petRepo.save(pet);
        }
        throw new Exception("Pet is null");
    }

    public List<Pet> getAllPets() throws Exception
    {
        List<Pet> pets=petRepo.findAll();
        if(pets != null)
        {
            return pets;
        }
        throw new Exception("Pets list is null");
    }

}
