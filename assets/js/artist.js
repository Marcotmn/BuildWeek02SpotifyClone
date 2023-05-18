const playlistNames = [
    "Be The Young Seasons 1-5",
    "Be The Young Seasons 6-8",
    "persona di m*rda (gen-feb 2023)",
    "Musical 2022",
    "pippo, pluto e paperino (nov-dec 2022)",
    "early stage emily syndrome (sett-ott 2022)",
    "Be the young",
    "'...' cit. Kimiko (lug-ago 2022)",
    "saggio vibes 💃🩰",
    "main character energy (mag-giu 2022)",
    "that fucking mood 🔪☠️",
    "VEE, CARLOTTA E GIACOMO VANNO A BOSIO",
    "An Emily Winchester kind of mood 🔪🖕",
    "landing page (mar-apr 2022)",
    "2021 lol",
    "cosa cazzo vuol dire questa affermazione (gen-feb 2022)",
    "honey and glass (nov-dic 2021)",
    "(Revenge) Training Arc 🦍",
    "Lidia 🤝 Emily",
    "minecraft e nintendo switch (sep-oct 2021)",
    "silvano d'orba? I hardly know her (lug - ago 2021)",
    "Culo 2021",
    "Frah Quintale Mix",
    "Francesco Guccini Mix",
    "Lo Stato Sociale Mix",
    "chapter 4/? (mag-giu 2021)",
    "Strive School <> The Hunt Motivation",
    "mi stavo dimenticando (mar-apr 2021)",
    "high school musical 1,2,3",
    "quanto trash cazzo",
    "The 2020 Playlist",
    "ma(ncanza) che cazzo ne so io (gen-feb 2021)",
]
  
// SIDEBAR -DX
  
  window.onload = () => {
    const playlistUl = document.getElementById("chill-vibes");
  
    playlistNames.forEach(playlistName => {
      const li = document.createElement("li");
      li.innerText = playlistName;
      playlistUl.appendChild(li);
    });
  };

//POPOLAMENTO CARDS
  window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const artistId = urlParams.get('id');
    
    if (artistId) {
      const apiUrl = `https://striveschool-api.herokuapp.com/api/deezer/artist/${0}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(artistData => {
         
          document.getElementById('artist').innerHTML = artistData.name;
          document.getElementById('artistImage').src = artistData.picture;
          
        })
        .catch(error => {
          console.error('Si è verificato un errore nella richiesta API:', error);
        });
    }
  });
  //PULSANTE FOLLOWING
  window.onload = () => {
    const playlistUl = document.getElementById("chill-vibes");

    playlistNames.forEach(playlistName => {
      const li = document.createElement("li");
      li.innerText = playlistName;
      playlistUl.appendChild(li);
    });
  };
  function toggleFollow() {
    var followButton = document.querySelector('.Following-button');
    if (followButton.innerText === 'Following') {
        followButton.innerText = 'Follow';
    } else {
        followButton.innerText = 'Following';
    }
}
  
  