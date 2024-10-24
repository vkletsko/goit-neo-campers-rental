# Travel Trucks App

This project leverages React, Redux, and React Router to build a single-page application (SPA) with centralized state management via Redux. Axios manages the API requests, while CSS modules handle component-specific styling. The backend functionality is simulated using MockAPI to manage data operations.

## Running and Setting Up the Project

### Requirements

- Node.js >= 18.0.0
- npm

### Running the Project

```bash
  npm run dev
```

5. **Go to:**

```bash
http://localhost:5173/
```

## Technologies Used

- [Vite](https://vite.dev/) — For fast project setup and development.
- [React](https://react.dev/) — For building user interfaces.
- [Redux](https://redux.js.org/) — For state management.
- [React Router](https://reactrouter.com/en/main) — For routing between pages.
- [Axios](https://axios-http.com/docs/intro) — For handling HTTP requests.
- CSS Modules — For styling components.

## Project Structure

```bash
src/
│
├── assets/              # Static resources like images, icons, and fonts
├── components/          # Reusable UI components and custom elements
├── pages/               # Components representing individual routes or views
├── redux/               # Redux logic, including slices, actions, and store configuration
├── utils/               # Utility functions and helper modules shared across the project
├── App.css              # Styles specific to the App component
├── App.jsx              # Root component managing layout and route handling
├── index.css            # Global styles for the entire application
└── main.jsx             # Entry point responsible for rendering the App component
```
