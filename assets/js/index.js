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

async function populateCards() {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
    );
    if (!response.ok) {
      throw new Error("Errore nella richiesta API");
    }
    const data = await response.json();
    console.log(data)

    const container = document.getElementById("contenitore-buonasera");

    for (let i = 0; i < 6; i++) {
      const item = data.data[i];
      const cardMarkup = `
          <div id="cards-buonasera"
            class="d-flex align-items-center">
            <div>
              <img src="${item.album.cover_big}" alt="" style="width: 4em;" class="me-2">
            </div>
            <div>
              <p>${item.title}</p>
            </div>
          </div>
        `;
      container.insertAdjacentHTML("beforeend", cardMarkup);
    }
  } catch (error) {
    console.error("Si è verificato un errore:", error);
  }
}

populateCards();

async function populateOtherCards() {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica"
    );
    if (!response.ok) {
      throw new Error("Errore nella richiesta API");
    }
    const data = await response.json();
     console.log(data)

    const container = document.getElementById("cards-artist-description");

    for (let i = 0; i < 5 && i < data.data.length; i++) {
      const item = data.data[i];
      const cardMarkup = `
        <div id="othercards" class="card me-2 rounded-3" style="width: 10em;">
        <img src="${item.album.cover_big}" class="card-img-top img-fluid rounded-1 mb-2" alt="...">
        <div class="card-body p-0">
          <p class="card-title">${item.title}</p>
          <p class="card-descrb">La playlist più calda del momento</p>
        </div>
      </div>`;
      container.insertAdjacentHTML("beforeend", cardMarkup);
    }
  } catch (error) {
    console.error("Si è verificato un errore:", error);
  }
}

populateOtherCards();


async function populateOtherCardsSec() {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=ac-dc"
      );
      if (!response.ok) {
        throw new Error("Errore nella richiesta API");
      }
      const data = await response.json();
  
      const container = document.getElementById("cards-artist-description2");
  
      for (let i = 0; i < 5 && i < data.data.length; i++) {
        const item = data.data[i];
        const cardMarkup = `
          <div id="othercards" class="card me-2 rounded-3" style="width: 10em;">
          <img src="${item.album.cover_big}" class="card-img-top img-fluid rounded-1 mb-2" alt="...">
          <div class="card-body p-0">
            <p class="card-title">${item.title}</p>
            <p class="card-descrb">La playlist più calda del momento</p>
          </div>
        </div>`;
        container.insertAdjacentHTML("beforeend", cardMarkup);
      }
    } catch (error) {
      console.error("Si è verificato un errore:", error);
    }
  }
  
  populateOtherCardsSec();