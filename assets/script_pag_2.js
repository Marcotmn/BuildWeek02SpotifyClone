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
  const fetchQuery = 'https://striveschool-api.herokuapp.com/api/deezer/search?q={query}'
  const fetcAlbumId = 'https://striveschool-api.herokuapp.com/api/deezer/album/'
  const fetchArtist = 'https://striveschool-api.herokuapp.com/api/deezer/artist/'
  //PARAMETRO ID DI CORRISPONDENZA DELLA HO PER ALBUN E ARTISTA    
  const albumId = new URLSearchParams(location.search);
  const referenceId = albumId.get("idAlbum") 
  const lista = document.querySelector('#playListItems');

 //elenco delle playlist di lidia!
 function playlist (){
  playlistNames.forEach(items=>{
  let newList = document.createElement('li');
  newList.innerText += items ;
lista.appendChild(newList)
})
 } 
playlist();

 async function album (){
  try{
    const res = await fetch(fetcAlbumId + referenceId)//esempio di id, corrispondente, la async funziona
    if(!res.ok){
      throw new Error ('L\'album selezionato non è stato trovato')
    }
    const replace = await res.json()
    const albums = replace;
    console.log(albums);
     let newHero = `<div class="playlist-cover">
     <img src="${albums.cover_big}" alt="">
 </div>
 <div class="playlist-info">
     <div class="playlist-public">${albums.cover}</div>
     <div class="playlist-title">${albums.title}</div>
     <div class="playlist-description"></div>
     <div style="height: 10px;"></div>
     <div class="playlist-stats">
         <img src="./assets/img/iconssvg/spotify-logo.png" width="24px" height="24px" alt="">
         <span> Spotify ·</span>
         <span>5,131,321 likes · </span>
         <span>Duration ${albums.duration}</span>
     </div>
 </div>`

     const appendHero = document.querySelector('.playlist-content');
     appendHero.innerHTML += newHero;



    let c = 0;
    const albumList = replace.tracks.data;
    console.log(albumList)
    for(let i = 0; i < 9; i++){
      c++;
      let newList = ` <div class="song-title row align-content-center">
      <div class="d-flex gap-2 justify-content-between">
      <div class=" d-flex gap-2 mx-2 my-2">
          <p class="gray-filtered">${c}</p>
          <img src="${albums.cover_small}" alt="" >
          <div class="song-image gray-filtered">
              <span>${albumList[i].artist.name}</span>
              <p class="gray-filtered" style="font-size: .6em; font-weight: 700;">${albumList[i].title_short}</p> 
          </div>
      </div>
      <div class="gray-filtered">
      <span>${albumList[i].rank}</span>
      </div>
      <div class="gray-filtered">
          ${albumList[i].type}
      </div>
      <div class="gray-filtered d-flex justify-content-center mx-4">
          <p>${albumList[i].duration}</p>
      </div>
    </div>
    </div>`
      const completa = document.querySelector('.listaSongs')
      completa.innerHTML += newList;

    }
 }
 catch(err){
  console.error(err)
 }
}
album();

 












//function per pag 2 inserimento elementi nel container 


//fetch pag artist con rilevamento tramide id 
/* async function artist (){
  try{
    const res = await fetch(fetchArtist+ referenceId)//esempio di id, corrispondente, la async funziona
    if(!res.ok){
      throw new Error ('aia')
    }
    const replace = await res.json()
    const artistObj = replace["data"];
    console.log(dates)
    const artistPreview = document.querySelector('#cards');
    for(let i = 0; i < artistObj.length; i++){
      console.log(artistObj)
    artistPreview.innerHTML += `cose`

    }
 }
  catch(err){
    console.error('miao')
  }
 }*/


//creare le costanti in ogni script. richiamare il searchParms
//creare una variabile numerica che si incrementa ogni volta che viene iniziallizzata una pagina con una lista di contenuti mandati a schermo
// scrivere una function per randomizzare la home
//collegamenti: <a href="./pagina_due.html?idAlbum=${dates[i].album.id}"></a>
//              <a href="./pagina_tre.html?idAlbum=${dates[i].artist.id}"></a>

//fare gli addEventListner per quando viene effettuata la call nella home principale
//scrivere fanction separate in ogni script; inizializzare la fetch con un if: fare un forEach o for, per creare contenuti nella pagina di riferimento.
//ricordare a lidia che questo lavoro lo sto facendo da solo. :D
