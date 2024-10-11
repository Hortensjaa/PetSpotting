# PetSpotting-App

A web application for sharing adorable pictures of pets, built with a Spring Boot backend and a React frontend. This project integrates Google Drive for file storage and connects to a Microsoft SQL Server database hosted on Azure.

## Table of Contents

- [Project Setup](#project-setup)
- [Frontend](#frontend)
- [Backend](#backend)
- [Technologies](#technologies)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
---

## Project Setup

To run the project, follow the steps below for setting up both the frontend and backend.

### Prerequisites

- Node.js v16+ (for frontend)
- Java 17+ (for backend)
- Maven (for backend)
- Microsoft SQL Server (or Azure-hosted SQL Server)
- Google API credentials for Drive integration
---

## Frontend

The frontend is built using React, Vite, and Material-UI for styling.

### Key Dependencies:

- **React 18**: Frontend framework for building user interfaces
- **Vite**: Build tool for faster development
- **Material-UI**: UI components for styling
- **Axios**: Promise-based HTTP client
- **React Router DOM**: Client-side routing
- **Date-fns**: Utility library for date handling

### Available Scripts:

- `dev`: Start the development server.
- `build`: Build the production-ready code.
- `lint`: Run ESLint to check for code issues.
- `preview`: Preview the production build.

### Setup:

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Backend

The backend is a Spring Boot application with support for OAuth2, Microsoft SQL Server, Google Drive API integration, and more.

### Key Dependencies:

- **Spring Boot 3.3.4**: Main framework for backend
- **Spring Boot Starter Web**: To build web applications
- **Spring Boot Starter JPA**: To manage database interactions using JPA
- **Microsoft SQL Server JDBC**: To connect to Azure-hosted SQL Server
- **Google API Client**: For integrating Google Drive for file storage
- **Lombok**: To reduce boilerplate code
- **Spring Boot Starter OAuth2 Client**: For OAuth2 authentication
- **dotenv**: For loading environment variables

### Setup:

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies using Maven:
   ```bash
   mvn clean install
   ```
3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

---

## Technologies

- **Frontend**: React, Vite, Material-UI, Axios, React Router DOM
- **Backend**: Spring Boot, JPA, Microsoft SQL Server, OAuth2, Google Drive API
- **Database**: Microsoft SQL Server (Azure-hosted)
- **Environment Management**: dotenv

---

## Environment Variables

The following environment variables are required to run the project:

For the frontend:
- `VITE_API_URL`: The URL for the backend API.

For the backend:
- `GITHUB_CLIENT`: GitHub OAuth client ID.
- `GITHUB_SECRET`: GitHub OAuth client secret.
- `GOOGLE_CLIENT`: Google OAuth client ID.
- `GOOGLE_SECRET`: Google OAuth client secret.
---

## Running the Project

1. Make sure the environment variables are set up properly.
2. Start the backend:
   ```bash
   mvn spring-boot:run
   ```
3. In a separate terminal, start the frontend:
   ```bash
   npm run dev
   ```
4. The frontend will be accessible at `http://localhost:5173`, and the backend API will run at `http://localhost:8080`.

---

Enjoy building and sharing pictures of pets! :3
