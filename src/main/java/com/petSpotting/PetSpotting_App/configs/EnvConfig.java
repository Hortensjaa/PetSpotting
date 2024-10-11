package com.petSpotting.PetSpotting_App.configs;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

@Configuration
public class EnvConfig {

    @Autowired
    private Environment env;

    @Bean
    public Dotenv dotenv() {
        Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();
        dotenv.entries().forEach(entry -> System.setProperty(entry.getKey(), entry.getValue()));
        return dotenv;
    }

    public String getGithubClient() {
        return env.getProperty("GITHUB_CLIENT");
    }

    public String getGithubSecret() {
        return env.getProperty("GITHUB_SECRET");
    }

    public String getGoogleClient() {
        return env.getProperty("GOOGLE_CLIENT");
    }

    public String getGoogleSecret() {
        return env.getProperty("GOOGLE_SECRET");
    }
}
