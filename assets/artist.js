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


  function toggleFollow() {
    var followButton = document.querySelector('.Following-button');
    if (followButton.innerText === 'Following') {
        followButton.innerText = 'Follow';
    } else {
        followButton.innerText = 'Following';
    }
}

const fetchArtist = 'https://striveschool-api.herokuapp.com/api/deezer/artist/'
const albumId = new URLSearchParams(location.search);
  const referenceId = albumId.get("idAlbum") 


  
async function popolate() {
try {
  const artist = await fetch(fetchArtist + "291");
  if(!artist.ok){
    throw new Error ('L\'album selezionato non è stato trovato')
  }
  const response = await artist.json()
  console.log(response)
  const artistPage = response;
  const banner = `
             <div id="image-copertina">
  <img src="${response.picture_xl}" class="card-img-top img-fluid rounded-1 mb-2" alt="..." >
  </div>
             <div class="container-banner"> 
              <div class="px-2 py-3">
                <div class="d-flex flex-column m-3">
                  <div>
                    <div class="m-0 mt-3">
                      <img id="artistImage"
                        style="width: 2.2em"
                        src="./assets/img/iconssvg/Check Mark Badge.svg"
                      />
                      <span class="text-light"> Artista verificato </span>
                    </div>
                    <p
                      class="m-0"
                      id="artist"
                      style="color: white; font-weight: 700; font-size: 4rem"
                    >
                      ${response.name}
                    </p>
                    <p
                      class="m-0"
                      id="ascoltatori"
                      style="color: white; font-weight: 600; font-size: 15px"
                    >
                      20.701.822 ascoltatori mensili
                    </p>
                  </div>
                </div>
            </div>
            </div>
            
          
  `
  const plays = document.querySelector('#heroSection');
  plays.innerHTML = banner;

  
}
catch (err) {
  console.error(err)
}}
popolate();


