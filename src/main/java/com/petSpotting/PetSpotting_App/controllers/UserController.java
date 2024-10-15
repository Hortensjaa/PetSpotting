package com.petSpotting.PetSpotting_App.controllers;

import com.petSpotting.PetSpotting_App.dbEntities.User;
import com.petSpotting.PetSpotting_App.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import java.util.Objects;

import static com.petSpotting.PetSpotting_App.configs.FrontendConfig.frontendUrl;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("api/user")
    public User getUser(@AuthenticationPrincipal OAuth2User principal) {
        return extractData(principal);
    }

    @GetMapping("api/user/{id}")
    public User getUserById(@PathVariable String id) {
        return userService.getUserById(id);
    }

    @GetMapping("api/addUser")
    public RedirectView addUser(@AuthenticationPrincipal OAuth2User principal) {
        User user = extractData(principal);
        User existingUser = userService.getUserById(user.getUser_id());
        if (existingUser == null) {
            userService.addUser(user);
        }
        return new RedirectView(frontendUrl + "/profile/" + user.getUser_id());
    }

    private User extractData(@AuthenticationPrincipal OAuth2User principal) {
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
