package com.petSpotting.PetSpotting_App.services;


import com.petSpotting.PetSpotting_App.collections.Pet;

import java.util.List;

public interface PetServiceInterface
{
    Pet addPet(Pet pet) throws Exception;
    List<Pet> getAllPets() throws Exception;
}
