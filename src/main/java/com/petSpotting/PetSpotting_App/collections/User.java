package com.petSpotting.PetSpotting_App.collections;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
public class User {
    private String provider;
    private String id;
    private String name;
    private String email;
    private String avatar_url;

    public User(String provider, String id, String name, String email, String avatar_url) {
        this.provider = provider;
        this.id = id;
        this.name = name;
        this.email = email;
        this.avatar_url = avatar_url;
    }
}
