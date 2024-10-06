package com.petSpotting.PetSpotting_App.collections;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Getter
@Setter
@Document(collection = "Pets")
public class Pet {
    @Id
    private String id;
    private String name;
    private Species species;
    private String description;
    private String imageUrl;
    private LocalDateTime timeSpotted;

    public Pet(String name, String description) {
        this.name = name;
        this.description = description;
        this.species = Species.DOG;
    }
}
