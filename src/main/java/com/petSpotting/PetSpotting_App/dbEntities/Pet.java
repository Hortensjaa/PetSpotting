package com.petSpotting.PetSpotting_App.dbEntities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.petSpotting.PetSpotting_App.collections.Species;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "Pets")
public class Pet {
    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String name;
    @Enumerated(EnumType.STRING)
    private Species species;
    private String description;
    private String image_url;
    private LocalDateTime time_spotted;
    @ManyToOne
    @JoinColumn(name = "author", referencedColumnName = "user_id")
    @JsonBackReference
    private User author;
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "likes",
            joinColumns = @JoinColumn(name = "id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> likes;

    public Pet(String name, String description, Species species) {
        this.name = name;
        this.description = description;
        this.species = species;
    }

    public Pet() {}

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
