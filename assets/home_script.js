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
];

playListLeft = document.querySelector("#playListLeft");
playlistNames.forEach((item) => {
  const li = document.createElement("li");
  li.innerText = item;
  playListLeft.appendChild(li);
});

const apiHomeHero =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q={query}";

async function populateHero() {
  try {
    const response = await fetch(apiHomeHero);
    if (!response.ok) {
      throw new Error("Errore nel recupero api");
    }
    const data = await response.json();
    const home = data.data;
    const heroBanner = document.querySelector("#hero-section");
    for (let i = 0; i < 1; i++) {
      console.log(home[i]);
      home.sort(() => Math.random() - 0.5);
      heroBanner.innerHTML += `<div id="hero-home" class="p-3 d-flex mb-3">
              <div id="immagine-hero">
                <img src="${home[i].album.cover}" class="img-fluid object-fit-cover" alt="..." width="170px"/>
              </div>
              <div id="testoHero">
                <p><b>${home[i].album.title}</b></p>
                <h1 class="text-white mb-0 ms-3"><b>${home[i].title}</b ></h1 >
                <p>${home[i].artist.name}</p>
                <p>${home[i].duration}</p>
                <div id="buttonsHero" class="d-flex align-items-center">
                  <button id="bottone1">Play</button>
                  <button id="bottone2">Salva</button>
                  <span><i class="bi bi-three-dots"></i></span>
                </div>
              </div >
        <div id="nascondi-annunci">
          <button>NASCONDI ANNUNCI</button>
        </div>`;
    }
  } catch (error) {
    console.error(error);
  }
}

populateHero();

const apiHomeEvening =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q={query}";

async function populateGoodEvening() {
  try {
    const response = await fetch(apiHomeEvening);
    if (!response.ok) {
      throw new Error("Errore nel recupero api");
    }
    const data = await response.json();
    const home = data.data;
    const goodEvening = document.querySelector("#contenitore-buonasera");
    for (let i = 0; i < 6; i++) {
      console.log(home[i]);
      home.sort(() => Math.random() - 0.5);
      goodEvening.innerHTML += `
      <div id="cards-buonasera"
        class="d-flex align-items-center">
        <div>
          <img src="${home[i].album.cover_big}" alt="" style="width: 4em;" class="me-2">
        </div>
        <div>
          <p>${home[i].title}</p>
        </div>
      </div>
    `;
    }
  } catch (error) {
    console.error(error);
  }
}

populateGoodEvening();

const apiOther =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=yellowcard";

async function populateOtherCards() {
  try {
    const response = await fetch(apiOther);
    if (!response.ok) {
      throw new Error("Errore nel recupero api");
    }
    const data = await response.json();
    const home = data.data;
    const otherBanner = document.querySelector("#cards-artist-description");
    for (let i = 0; i < home.length; i++) {
      home.sort(() => Math.random() - 0.5);
      console.log(home[i]);
      otherBanner.innerHTML += `
      <div id="othercards" class="card rounded-3" style="width: 15em;">
      <img src="${home[i].album.cover_big}" class="card-img-top img-fluid rounded-1 mb-2" alt="...">
      <div class="card-body p-0">
        <a class="card-title" href="pag_2.html">${home[i].title}</a>
        <div>
        <a class="card-descrb" href="pag_2.html">${home[i].artist.name}</a>
        </div>
        <div>
        </div>
      </div>
</div>`;
    }
  } catch (error) {
    console.error(error);
  }
}

populateOtherCards();
