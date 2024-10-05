package com.petSpotting.PetSpotting_App.controllers;

import com.petSpotting.PetSpotting_App.services.PetServiceInterface;
import com.petSpotting.PetSpotting_App.collections.Pet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PetController {
    @Autowired
    private PetServiceInterface petService;


    @PostMapping("/api/pets")
    public ResponseEntity<Pet> addPet(@RequestBody Pet pet) throws Exception
    {
        if(pet!=null)
        {
            petService.addPet(pet);
            return new ResponseEntity<>(pet,HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping("/api/pets")
    public ResponseEntity<List<Pet>> getAllPets() throws Exception
    {
        List<Pet> pets = petService.getAllPets();
        if(pets!=null)
        {
            return new ResponseEntity<>(pets, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
