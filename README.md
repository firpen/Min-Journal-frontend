# Min Journal – Frontend

Min Journal is a journaling app where users create an account and save short journal entries. Each entry has a free-text note, a status (how you feel) and the date and time it was created.

This repository contains the **Angular frontend**. The backend (Spring Boot + MySQL) lives in a separate repository: [Min-Journal-backend](https://github.com/firpen/Min-Journal-backend). Both are needed to run the app.

## Features

- **Register and log in.** Login is session based: the backend sets a `JSESSIONID` cookie that the browser sends with every request.
- **Protected pages.** Route guards send logged-out users to the login page, and logged-in users away from login and register.
- **Create entries** with a note and one of six statuses: Happy, Sad, Tired, Stressed, Calm and Angry.
- **History.** All entries are listed with their status as an emoji and the date in Swedish format, e.g. `27 februari 2025 klockan 13:55`.
- **Filter** the history between a start and an end date.
- **Edit and delete** entries.
- **Statistics.** For the selected date range, the percentage of entries per status is shown.
- **Log out.**

## Tech stack

- Angular 21 (NgModules, signals, template-driven forms with `ngModel`)
- TypeScript
- `HttpClient` for API calls, with `withCredentials: true` so the session cookie is sent

## Requirements

- [Node.js](https://nodejs.org/)
- Java 21 and a Java IDE (e.g. IntelliJ IDEA or VS Code) for the backend
- A running MySQL server
- Git

## Running the project locally

### 1. Clone both repositories

```bash
git clone https://github.com/firpen/Min-Journal-frontend.git
git clone https://github.com/firpen/Min-Journal-backend.git
```

### 2. Set up the database

Create an empty MySQL database

The tables are created automatically by the backend on first start.

### 3. Configure the backend

In the root of the backend project (next to `pom.xml`) there is a file called `.env example`. Copy it to a new file named `.env` in the same folder and fill in your own database details:

```
DB_URL=jdbc:mysql://localhost:3306/your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

`.env` is gitignored, so your credentials are never committed.

### 4. Start the backend

Open the backend project in your IDE and run `MinJournalBackendApplication`.

```bash
./mvnw spring-boot:run
```

The backend starts on `http://localhost:8080`.

### 5. Start the frontend

Open the frontend project in your IDE. In a terminal in the frontend folder, install the dependencies and start the dev server:

```bash
npm install
npm start
```

Open `http://localhost:4200` in your browser, register an account and log in.

> The frontend must run on port **4200** and the backend on port **8080**. The backend only accepts cross-origin requests from `http://localhost:4200`.

## Project structure

```
src/app/
  pages/        Route-level pages: home, login, register
  components/   note-form, note-list, edit-form, stats
  services/     auth.ts and note.ts (HTTP calls), auth-guard.ts (route guards)
  models/       TypeScript interfaces for requests and responses
```
