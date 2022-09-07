const idArtist = [
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
function getFetchData(url, token) {
  let dataFetch;
  let loadingFetch = true;

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
      dataFetch = responseData;
      loadingFetch = false;
    } else {
      loadingFetch = false;
    }
  })();
  return [dataFetch, loadingFetch];
}
export const getTracks = (token) => {
  let searchArtist = idArtist.slice(0, 1).join(",");
  // `https://api.spotify.com/v1/recommendations?seed_artists=${searchArtist}&seed_genres=classic,country&seed_tracks=6CO4WFWJGcaU5IByGLUYUj,13BVU634EX7PqtRoKj0ZWZ&limit=15`;
  const urlTracksRecommandation = `https://api.spotify.com/v1/browse/new-releases`;

  const [dataTrack, loading] = getFetchData(urlTracksRecommandation, token);
  return [dataTrack, loading];
};
export const getArtists = (token) => {
  const urlArtists = `https://api.spotify.com/v1/artists?ids=${idArtist.join(
    ","
  )}`;

  const [dataArtists, loading] = getFetchData(urlArtists, token);
  return [dataArtists, loading];
};
export const getPlaylist = (token) => {
  const urlPlaylist = "https://api.spotify.com/v1/browse/featured-playlists";

  const [dataPlaylist, loading] = getFetchData(urlPlaylist, token);
  return [dataPlaylist, loading];
};
