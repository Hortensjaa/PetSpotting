package com.petSpotting.PetSpotting_App;

import com.azure.core.credential.TokenRequestContext;
import com.azure.identity.DefaultAzureCredential;
import com.azure.identity.DefaultAzureCredentialBuilder;
import com.microsoft.sqlserver.jdbc.SQLServerDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.util.Objects;

@Configuration
public class DataSourceConfig {

    @Bean
    public DataSource dataSource() {
        // Set up the SQL Server data source
        SQLServerDataSource ds = new SQLServerDataSource();
        ds.setServerName("petspotting.database.windows.net");
        ds.setDatabaseName("petSpotting");
        ds.setEncrypt(true);
        ds.setTrustServerCertificate(false);
        ds.setHostNameInCertificate("*.database.windows.net");

        // Build DefaultAzureCredential
        DefaultAzureCredential credential = new DefaultAzureCredentialBuilder().build();

        // Acquire token using Azure Identity (without anonymous class)
        TokenRequestContext tokenRequestContext = new TokenRequestContext()
                .addScopes("https://database.windows.net/.default");

        String accessToken = Objects.requireNonNull(credential.getToken(tokenRequestContext).block()).getToken();

        // Set the access token for the SQL Server DataSource
        ds.setAccessToken(accessToken);

        return ds;
    }
}


