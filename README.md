# Photo Gallery Web App

### Celebrare Frontend Intern Pre-Screening Assignment

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

---

## 💎 Architectural Highlights & Performance Optimizations

### 1. `useFetchPhotos` Custom Hook
Separates data retrieval from UI presentation. It initiates a single asynchronous fetch on mount using the native Fetch API. 
* **Demo Loading Delay**: Compares the request execution time and holds the `loading` flag for at least **1.0 second** total using a promise delay. This ensures the loading spinner remains visible and checkable in screen recordings even on fast network connections.
* **Leak Protection**: Uses a native `AbortController` to abort active network tasks if the user navigates away or unmounts the component mid-request, preventing state-setting memory leaks.

### 2. State Reduction (`useReducer` + `localStorage`)
Keeps logic isolated and testable inside `favouritesReducer.js`. 
* **Lazy State Loading**: The reducer relies on a lazy initializer function to query `localStorage` **exactly once** on initial mount. This prevents reading from the disk on every tick or render.
* **Declarative Syncing**: A single `useEffect` listens directly to updates in the `favourites` state and handles syncing to disk automatically.

### 3. Callback Memoization (`useCallback`)
Saves handlers (`handleSearch`, `handleToggleFavourite`) using stable reference memory pointers. Since these handlers are passed as props to child components (`SearchBar` and `PhotoCard`), `useCallback` stops child re-renders from executing on parent refresh loops.

### 4. Value Memoization (`useMemo`)
The real-time search list (`filteredPhotos`) is memoized. High-order operations (like `.filter()`) will only run if either the fetched `photos` array or the text in the `search` query changes. Toggling favorites (which updates the `favourites` state but doesn't change the list or query) bypasses the search algorithm completely.

---

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

## 📽️ Submission Checklist
1. **GitHub Repository**: Code pushed to a public repository.
2. **Screen Recording**: 5-minute video detailing:
   * **App Working**: Fetching, spinner, searching, toggling favourites, and refresh persistence.
   * **Hook Walkthrough**: Custom `useFetchPhotos` setup.
   * **State Architecture**: `useReducer` action handling and lazy initialization.
   * **Optimizations**: Talking through `useMemo` and `useCallback` (and what happens if removed).
   * **Difficult Part**: Synchronizing reducer state with disk reads/writes.
