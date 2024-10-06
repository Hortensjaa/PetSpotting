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

    public Pet(String name, String description, Species species) {
        this.name = name;
        this.description = description;
        this.species = species;
    }

    public static Species castSpecies(String species) {
        if (species.equalsIgnoreCase("cat")) {
            return Species.CAT;
        } else if (species.equalsIgnoreCase("dog")) {
            return Species.DOG;
        } else {
            return Species.OTHER;
        }
    }
}
