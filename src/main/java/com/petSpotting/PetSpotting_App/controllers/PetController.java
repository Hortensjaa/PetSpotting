package com.petSpotting.PetSpotting_App.controllers;

import com.petSpotting.PetSpotting_App.collections.PetResponse;
import com.petSpotting.PetSpotting_App.dbEntities.Pet;
import com.petSpotting.PetSpotting_App.dbEntities.User;
import com.petSpotting.PetSpotting_App.services.DriverService;
import com.petSpotting.PetSpotting_App.services.PetService;
import com.petSpotting.PetSpotting_App.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
public class PetController {
    @Autowired
    private PetService petService;
    @Autowired
    private DriverService driverService;
    @Autowired
    private UserService userService;

    @GetMapping("/api/pets")
    public ResponseEntity<List<PetResponse>> getAllPets() {
        List<Pet> pets = petService.getAllPets();
        ArrayList<PetResponse> petResponseList = new ArrayList<>(List.of());
        if(pets!=null)
        {
            for (Pet pet : pets) {
                petResponseList.add(new PetResponse(pet, pet.getAuthor()));
            }
            return new ResponseEntity<>(petResponseList, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PostMapping("/api/pets")
    public ResponseEntity<Pet> addPet(
            @RequestParam("name") String name, @RequestParam("description") String description,
            @RequestParam("species") String species, @RequestParam("image") MultipartFile file,
            @RequestParam("user") String user_id) throws Exception
    {
        if(name!=null && !name.isEmpty()) {
            Pet pet = new Pet(name, description, Pet.castSpecies(species));
            // uploading file
            if (file!=null && !file.isEmpty()) {
                File tempFile = File.createTempFile("temp", null);
                file.transferTo(tempFile);
                pet.setImage_url(driverService.uploadImageToDrive(tempFile).getUrl());
            }
            // finding user
            User user = userService.getUserById(user_id);
            if (user != null) {
                pet.setAuthor(user);
            }
            pet.setTime_spotted(LocalDateTime.now());
            petService.addPet(pet);
            return new ResponseEntity<>(pet,HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
