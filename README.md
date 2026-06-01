# Photo Gallery Web App

### Celebrare Frontend Intern Pre-Screening Assignment

Website link: https://legendary-conkies-411c12.netlify.app/

A simple, responsive, and performance-optimized **Photo Gallery Web App** built using **React, Vite, and Tailwind CSS**. 

This application fetches 30 high-quality photos from the Picsum API, renders them in a responsive column grid, implements real-time client-side search by author name, and manages favorites using a custom hook, standard `useReducer`, and `localStorage` state synchronization.

---

## 🚀 Tech Stack & Core APIs

* **Core Framework**: React 19 (Functional Components) + Vite
* **Styling**: Tailwind CSS v4 (Pure utilities, zero custom UI component libraries)
* **State & Performance Hooks**: `useState`, `useEffect`, `useReducer`, `useMemo`, `useCallback`
* **Browser APIs**: Fetch API, LocalStorage API, AbortController API

---

## 📂 Project Structure

This project follows the strict directory guidelines requested in the assignment brief:

```
src
│
├── components
│   ├── SearchBar.jsx        # Centered search input for real-time author filtering
│   ├── PhotoGrid.jsx        # Responsive column layout container
│   ├── PhotoCard.jsx        # Grid card displaying Photo, Author, and Heart toggle
│   ├── LoadingSpinner.jsx   # Clean SVG loading spinner with pulse feedback
│   └── ErrorMessage.jsx     # Graceful error notification box
│
├── hooks
│   └── useFetchPhotos.js    # Custom fetching hook managing photos, loading, and error states
│
├── reducers
│   └── favouritesReducer.js # Pure state reducer handling the TOGGLE_FAVOURITE action
│
├── pages
│   └── Gallery.jsx          # Main orchestrator page assembling layout and memoized state
│
├── App.jsx                  # Root component rendering <Gallery />
├── main.jsx                 # Application mount file
└── index.css                # CSS entrypoint importing Tailwind
```



## 🛠️ Getting Started & Local Setup

Ensure you have [Node.js](https://nodejs.org/) installed, then execute these commands in your shell:

### 1. Clone & Enter Directory
```bash
cd d:/CELEBRARE
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open **`http://localhost:5173`** in your browser to run the app in development mode.

### 4. Build for Production
To bundle and compile optimized static files in the `/dist` folder:
```bash
npm run build
```

---


