import React, { useState, useCallback, useMemo, useReducer, useEffect } from 'react';
import { useFetchPhotos } from '../hooks/useFetchPhotos';
import { favouritesReducer, initialState } from '../reducers/favouritesReducer';
import SearchBar from '../components/SearchBar';
import PhotoGrid from '../components/PhotoGrid';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const [search, setSearch] = useState('');

 
  const [favourites, dispatch] = useReducer(favouritesReducer, initialState, () => {
    try {
      const saved = localStorage.getItem('favourites');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to parse favourites from localStorage', e);
      return [];
    }
  });

 
  useEffect(() => {
    try {
      localStorage.setItem('favourites', JSON.stringify(favourites));
    } catch (e) {
      console.error('Failed to write favourites to localStorage', e);
    }
  }, [favourites]);


  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  
  const filteredPhotos = useMemo(() => {
    if (!photos) return [];
    return photos.filter(photo =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [photos, search]);

  
  const handleToggleFavourite = useCallback((id) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: id });
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl mb-2">
            Photo Gallery
          </h1>
          <p className="max-w-md mx-auto text-sm text-slate-500">
            A simple, real-time searchable photo gallery with custom state persistence.
          </p>
        </header>

        <SearchBar search={search} handleSearch={handleSearch} />

        {loading && <LoadingSpinner />}

        {error && <ErrorMessage message={error} />}

        {!loading && !error && (
          <PhotoGrid
            photos={filteredPhotos}
            favourites={favourites}
            onToggleFavourite={handleToggleFavourite}
          />
        )}
      </div>
    </main>
  );
}
