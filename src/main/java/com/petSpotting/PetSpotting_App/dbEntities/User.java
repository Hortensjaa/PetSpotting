package com.petSpotting.PetSpotting_App.dbEntities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Entity
@Table(name = "Users")
public class User {
    @Id
    private String user_id;
    private String provider;
    @Setter
    private String name;
    @Setter
    private String email;
    @Setter
    private String avatar_url;
    @OneToMany(mappedBy = "author")
    private List<Pet> pets;

    public User(String provider, String id, String name, String email, String avatar_url) {
        this.provider = provider;
        this.user_id = id;
        this.name = name;
        this.email = email;
        this.avatar_url = avatar_url;
    }

    public User() {}
}
