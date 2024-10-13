package com.petSpotting.PetSpotting_App.controllers;

import com.petSpotting.PetSpotting_App.collections.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

@RestController
public class UserController {

    @RequestMapping("api/user")
    public User user(@AuthenticationPrincipal OAuth2User principal) {
        String id = principal.getAttribute("sub");
        String provider = "google";
        if (id == null) {
            id = Objects.requireNonNull(principal.getAttribute("id")).toString();
            provider = "github";
        }
        String name = principal.getAttribute("name");
        if (name == null && provider.equals("github")) {
            name = principal.getAttribute("login");
        }
        if (name == null && provider.equals("google")) {
            name = principal.getAttribute("email");
        }
        String email = principal.getAttribute("email");
        String avatar_url = principal.getAttribute("picture");
        if (avatar_url == null && provider.equals("github")) {
            avatar_url = principal.getAttribute("avatar_url");
        }
        return new User(provider, id, name, email, avatar_url);
    }

}
