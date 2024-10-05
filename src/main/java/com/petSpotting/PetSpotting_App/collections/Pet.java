package com.petSpotting.PetSpotting_App.collections;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "Pets")
public class Pet {
    @Id
    private String id;
    private String name;
    private Species species;
    private String description;
    private String imageUrl;
    private LocalDateTime timeSpotted;

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Species getSpecies() {
        return this.species;
    }

    public void setSpecies(Species species) {
        this.species = species;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return this.imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public LocalDateTime getTimeSpotted() {
        return this.timeSpotted;
    }

    public void setTimeSpotted() {
        this.timeSpotted = LocalDateTime.now();
    }
}
