package com.petSpotting.PetSpotting_App.services;


import com.petSpotting.PetSpotting_App.collections.Pet;
import com.petSpotting.PetSpotting_App.collections.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetService implements PetServiceInterface {
    @Autowired
    private PetRepository petRepo;

    @Override
    public Pet addPet(Pet pet) throws Exception
    {
        if(pet != null)
        {
            pet.setTimeSpotted();
            return petRepo.save(pet);
        }
        throw new Exception("Pet is null");
    }

    @Override
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
