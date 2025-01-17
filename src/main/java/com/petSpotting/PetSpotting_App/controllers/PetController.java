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
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController
public class PetController {
    @Autowired
    private PetService petService;
    @Autowired
    private DriverService driverService;
    @Autowired
    private UserService userService;

    @GetMapping("/api/pets")
    public ResponseEntity<List<PetResponse>> getAllPets(@AuthenticationPrincipal OAuth2User user) {
        String user_id = extractUserId(user);
        List<Pet> pets = petService.getAllPetsSorted();
        ArrayList<PetResponse> petResponseList = new ArrayList<>(List.of());
        if(pets!=null)
        {
            for (Pet pet : pets) {
                petResponseList.add(new PetResponse(pet, pet.getAuthor(), user_id));
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

    @DeleteMapping("/api/pets/{id}")
    public void deletePet(@PathVariable String id, @AuthenticationPrincipal OAuth2User principal) {
        if (principal != null) {
            Pet pet = petService.getPetById(id);
            if (pet != null && pet.getImage_url() != null
                    && Objects.equals(pet.getAuthor().getUser_id(), extractUserId(principal))) {
                String fileId = extractFileIdFromUrl(pet.getImage_url());
                driverService.deleteFileFromDrive(fileId);
            }
            petService.deletePet(id);
        }
    }

    @PatchMapping("/api/pets/{id}")
    public void updatePet(@PathVariable String id,
                          @RequestParam("name") String name,
                          @RequestParam("description") String description,
                          @RequestParam("species") String species,
                          @AuthenticationPrincipal OAuth2User principal) {
        if (principal != null) {
            Pet pet = petService.getPetById(id);
            if (pet != null && Objects.equals(pet.getAuthor().getUser_id(), extractUserId(principal))) {
                if (name != null && !name.isEmpty()) {
                    pet.setName(name);
                }
                if (description != null && !description.isEmpty()) {
                    pet.setDescription(description);
                }
                if (species != null && !species.isEmpty()) {
                    pet.setSpecies(Pet.castSpecies(species));
                }
                petService.addPet(pet);
            }
        }
    }

    @PostMapping("/api/pets/{petId}/like")
    public void addLike(@PathVariable String petId, @AuthenticationPrincipal OAuth2User principal) {
        if (principal != null) {
            petService.addLike(petId, extractUserId(principal));
        }
    }

    private String extractFileIdFromUrl(String url) {
        return url.substring(url.indexOf("id=") + 3, url.indexOf("&"));
    }

    private String extractUserId(@AuthenticationPrincipal OAuth2User principal) {
        String user_id_from_token = principal.getAttribute("sub");
        if (user_id_from_token == null) {
            user_id_from_token = Objects.requireNonNull(principal.getAttribute("id")).toString();
        }
        return user_id_from_token;
    }
}
