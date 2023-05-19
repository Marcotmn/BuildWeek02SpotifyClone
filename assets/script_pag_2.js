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
album();
if(referenceId){
 async function album (){
  try{
    const res = await fetch(fetcAlbumId + referenceId, )//esempio di id, corrispondente, la async funziona
    if(!res.ok){
      throw new Error ('L\'album selezionato non è stato trovato')
    }
    const replace = await res.json()
    const albums = replace.data;
    console.log(albums);
     let newHero = `<div class="playlist-cover">
     <img src="./assets/img/iconssvg/playlist-cover.png" alt="">
 </div>
 <div class="playlist-info">
     <div class="playlist-public"> PUBLIC PLAYLIST</div>
     <div class="playlist-title">Classic Road Trip Songs</div>
     <div class="playlist-description">A soundtrack to fuel your good mood while on the road.
     </div>
     <div style="height: 10px;"></div>
     <div class="playlist-stats">
         <img src="./assets/img/iconssvg/spotify-logo.png" width="24px" height="24px" alt="">
         <span> Spotify ·</span>
         <span>5,131,321 likes · </span>
         <span>100 songs, </span>
         <span>6 hr 57 min </span>
     </div>
 </div>`

     const appendHero = document.querySelector('.playlist-content');
     appendHero.innerHTML += newHero;
     
     let c = 0;

    replace.forEach(song =>{
      c++
      const songs = document.querySelector('.style')
      const row = document.createElement('div');
      row.classList.add('row', 'mb-3','brano', 'py-2');

      row.innerHTML = `<div class="song-title ">
      <div class="text-white"> 
          <p >1</p>
      </div>
      <div class="song-image">
          <img src="./assets/img/iconssvg/song-cover.jpeg" alt="">
      </div>
      <div class="song-name-album">
          <div class="song-name">Young as the Morning old as the Sea</div>
          <div class="song-artist">Passenger</div>
      </div>
      <p class="song-album">Young as the Morning old as the Sea</p>
      <p class="song-date-added">May 31, 2022</p>
      <p class="song-duration">
          3:26
      </p>
  </div>`
        songs.appendChild(row);
    })

  }
 catch(err){
   console.error('manca troppa roba')
 }
 }
}
 




/*if(referenceId){
  async function albumSongs(){
  try{
    const res = await fetch(albumId + referenceId,)
    if(!res.ok){
      throw new Error('nnammo')
    }
    const data = await res.json()
    const album = data.data;
    for(let i = 0; i < album.length; i++){
      let newTable = `  <div class="song-title">
      <div class="text-white"> 
          <p >1</p>
      </div>
      <div class="song-image">
          <img src="./assets/img/iconssvg/song-cover.jpeg" alt="">
      </div>
      <div class="song-name-album">
          <div class="song-name">Young as the Morning old as the Sea</div>
          <div class="song-artist">Passenger</div>
      </div>
      <p class="song-album">Young as the Morning old as the Sea</p>
      <p class="song-date-added">May 31, 2022</p>
      <p class="song-duration">
          3:26
      </p>
  </div>`
  const listaCorrelati = document.querySelector('.style')
  listaCorrelati.innerHTML += newTable;
    }
  }
  catch(err){
    console.error('miao')
  }
}
albumSongs();
}*/





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
