package com.petSpotting.PetSpotting_App.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(registry -> {
                    // urls that doesn't require authentication
                    registry.requestMatchers("/", "/login").permitAll();
                    // any other url requires authentication
                    registry.anyRequest().authenticated();
                })
                // login with oauth2
                .oauth2Login(form -> form.defaultSuccessUrl("/api/profile", true))
                .build();
    }
}
