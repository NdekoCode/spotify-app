import { useEffect, useState } from 'react';

export default function useFetch(url, data, token) {
  // On initialise l'Etat du des données à charger en AJAX
  const [state, setState] = useState({
    items: [],
    loading: true,
  });
  let params = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };

  useEffect(() => {
    // On met une fonction asynchrone que l'on va appeler plus tard pour executer les requetes
    (async () => {
      const response = await fetch(url, params);
      data = await response.json();
      if (response.ok) {
        setState((state) => ({
          items: Object.assign(state.items, data),
          loading: false,
        }));
      } else {
        setState((state) => ({ ...state, loading: false }));
      }
    })();
  }, [state.items, url, state.loading, token]);
  return [state.items, state.loading];
}
