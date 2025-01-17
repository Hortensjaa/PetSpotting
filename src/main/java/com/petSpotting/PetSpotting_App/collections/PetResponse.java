package com.petSpotting.PetSpotting_App.collections;

import com.petSpotting.PetSpotting_App.dbEntities.Pet;
import com.petSpotting.PetSpotting_App.dbEntities.User;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Objects;

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
    private Integer likes_num;
    private Boolean liked;

    public PetResponse(Pet pet, User author, String user_id) {
        this.id = pet.getId();
        this.name = pet.getName();
        this.species = pet.getSpecies();
        this.description = pet.getDescription();
        this.image_url = pet.getImage_url();
        this.time_spotted = pet.getTime_spotted();
        this.user_id = author.getUser_id();
        this.user_name = author.getName();
        this.user_avatar = author.getAvatar_url();
        this.likes_num = pet.getLikes().size();
        this.liked = pet.getLikes().stream().anyMatch(user -> Objects.equals(user.getUser_id(), user_id));
    }
}
