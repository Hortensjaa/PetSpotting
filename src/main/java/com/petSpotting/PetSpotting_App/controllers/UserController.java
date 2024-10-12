package com.petSpotting.PetSpotting_App.controllers;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Map;

@RestController
public class UserController {

    @RequestMapping("api/user")
    public Map<String, Object> user(@AuthenticationPrincipal OAuth2User principal) {
        return principal.getAttributes();
    }

    @GetMapping("/api/profile")
    public void profile(OAuth2AuthenticationToken authentication, HttpServletResponse response) throws IOException {
        String accessToken = authentication.getAuthorizedClientRegistrationId();
        Cookie cookie = new Cookie("accessToken", accessToken);
        cookie.setPath("/"); // Set the path to root
//        cookie.setHttpOnly(true); // Recommended to set HttpOnly for security
//        cookie.setSecure(true); // Set to true if you are using HTTPS
        cookie.setMaxAge(7 * 24 * 60 * 60); // Optional: Set cookie expiration (7 days)
        System.out.println("Setting cookie: " + accessToken);
        response.addCookie(cookie);
        response.sendRedirect("http://localhost:5173/profile");
    }

    @RequestMapping("/api/clear")
    public void clearCookie(HttpServletResponse response) {
        System.out.println("Clearing cookies");
        Cookie cookie = new Cookie("accessToken", null);
        cookie.setMaxAge(0);
        response.addCookie(cookie);
    }

}
