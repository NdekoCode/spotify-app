import { useEffect } from "react";

export const idArtist = [
  "4OBJLual30L7gRl5UkeRcT",
  "2dIgFjalVxs4ThymZ67YCE",
  "5VO5GFUAOEURtWW9oWvbcV",
  "0is7KJiz3t87LiJWUO1tNI",
  "0GOx72r5AAEKRGQFn3xqXK",
  "6IflU2YrY5Cyw7YoBICosV",
  "4bSBGQWUDeonXg7P4ys0CM",
  "4sbXXFzEWJY2zsZjelerjX",
  "20M8IJbzy7Y5EBRfwDIUmb",
  "3qfrrrSO7utFdJkM2tvMRb",
  "7x3eTVPlBiPjXHn3qotY86",
  "7xNYY1Zkb1vks5m9ATlJok",
];
export default function fetchData(url, token) {
  let data,
    loading = true;
  const params = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  // On met une fonction asynchrone que l'on va appeler plus tard pour executer les requetes
  (async () => {
    const response = await fetch(url, params);
    const responseData = await response.json();
    if (response.ok) {
      data = responseData;
      loading = false;
    } else {
      loading = false;
    }
  })();
  return [data, loading];
}
export function findAndSetData(url, token, setData) {
  const [data, loading] = fetchData(url, token);
  if (data !== undefined && data !== null) {
    setData(data);
    return [data, loading];
  }

  return [data, loading];
}
