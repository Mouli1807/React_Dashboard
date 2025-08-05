
# React + Vite + Tailwind CSS Project

## Live Demo

- 🚀 Deployed App: [https://react-dashboard-zwu3.vercel.app](https://react-dashboard-zwu3.vercel.app)
- 🗂️ GitHub Repo: [https://github.com/Mouli1807/React_Dashboard](https://github.com/Mouli1807/React_Dashboard)

A modern React-based project utilizing the latest frontend technologies and tools for building responsive web applications.

## Features

- **React 18** - React version with improved rendering and concurrent features
- **Vite** - Lightning-fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework with extensive customization
- **React Router** - Declarative routing for React applications

## Prerequisites

- Node.js (v14.x or higher)
- npm or yarn


## Local Setup & Running the Project

Follow these steps to set up and run the project locally:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```


3. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view the app.
## Design Decisions, Challenges & Improvements

### Design Decisions
- **Redux Toolkit** is used for state management of orders, with localStorage persistence for session durability.
- **Component Modularity:** UI is split into reusable components (Navbar, Sidebar, Table, etc.) for maintainability and scalability.
- **Tailwind CSS** is used for rapid, utility-first styling and responsive design.
- **React Router** enables clean, declarative routing for multiple dashboard pages.
- **Theme Context:** Dark/light mode is managed via React context and persisted in localStorage.

### Challenges Faced
- **State Persistence:** Ensuring Redux state (orders) persists across sessions required careful use of localStorage and syncing with Redux actions.
- **Dynamic Table Updates:** Making the order table fully dynamic (add/delete) while keeping UI and Redux state in sync.
- **Responsive Layout:** Achieving a seamless, responsive layout for all dashboard components using Tailwind utilities.
- **Action Menu Z-Index:** Ensuring the table action menu always appears above pagination and other elements required z-index tuning.

### Improvements Made
- **Redux Integration:** Orders are now managed via Redux, with add/delete actions and persistent storage.
- **Modal Forms:** Added modal for adding new orders, improving UX and data entry.
- **Single-line Truncation:** Notification and table text are truncated for clean, single-line display.
- **Commenting & Documentation:** All major files and components are commented for clarity and maintainability.
- **UI Polish:** Action menus, modals, and table controls have been refined for usability and consistency.

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── styles/          # Global styles and Tailwind configuration
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── Routes.jsx       # Application routes
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration for Tailwind
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
```

## Styling

This project uses Tailwind CSS for styling. The configuration includes:

- Utility-first approach for rapid development
- Custom theme configuration
- Responsive design utilities
- PostCSS and Autoprefixer integration

## Deployment

Build the application for production:

```bash
npm run build
```

