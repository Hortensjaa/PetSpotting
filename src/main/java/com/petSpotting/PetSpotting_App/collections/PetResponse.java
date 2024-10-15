package com.petSpotting.PetSpotting_App.collections;

import com.petSpotting.PetSpotting_App.dbEntities.Pet;
import com.petSpotting.PetSpotting_App.dbEntities.User;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PetResponse {
    private String id;
    private String name;
    private Species species;
    private String description;
    private String image_url;
    private LocalDateTime time_spotted;
    private String user_id;
    private String user_name;
    private String user_avatar;

    public PetResponse(Pet pet, User user) {
        this.id = pet.getId();
        this.name = pet.getName();
        this.species = pet.getSpecies();
        this.description = pet.getDescription();
        this.image_url = pet.getImage_url();
        this.time_spotted = pet.getTime_spotted();
        this.user_id = user.getUser_id();
        this.user_name = user.getName();
        this.user_avatar = user.getAvatar_url();
    }
}
