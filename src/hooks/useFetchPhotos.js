import { useState, useEffect } from 'react';

export function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchPhotos() {
      const startTime = Date.now();
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://picsum.photos/v2/list?limit=30', { signal });
        
        if (!response.ok) {
          throw new Error('Failed to load photos. Please try again later.');
        }

        const data = await response.json();
        setPhotos(data);
      } catch (err) {
        
        if (err.name !== 'AbortError') {
          setError(err.message || 'Failed to load photos. Please try again later.');
        }
      } finally {
        const elapsedTime = Date.now() - startTime;
        const remainingDelay = Math.max(0, 1000 - elapsedTime);
        
        if (remainingDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, remainingDelay));
        }
        
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchPhotos();

    return () => {
      controller.abort();
    };
  }, []);

  return { photos, loading, error };
}
