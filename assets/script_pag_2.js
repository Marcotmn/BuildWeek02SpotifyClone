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


//FUNCTIOON HOME CON RILEVANZA ID PARAMETRO PER PAG 2

 //creare function per randomizzare le card da mandare a schermo da fare alla fine

//fetch per albumid, una volta fecciata mandare a schermo ( fare test in serata)/
 async function album (){
  try{
    const res = await fetch(fetcAlbumId + referenceId, )//esempio di id, corrispondente, la async funziona
    if(!res.ok){
      throw new Error ('aia')
    }
    const replace = await res.json()
    const albums = replace;
    console.log(albums)
    const albumPreview = document.querySelector('#cose')
    for(let i = 0; i < albums.length; i++){
      console.log(albums)
      albumPreview.innerHTML += ``
      

    }
  }
 catch(err){
   console.error('manca troppa roba')
 }
 }
 album();
//function per pag 2 inserimento elementi nel container 


//fetch pag artist con rilevamento tramide id 
 async function artist (){
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
 }
artist();

//creare le costanti in ogni script. richiamare il searchParms
//creare una variabile numerica che si incrementa ogni volta che viene iniziallizzata una pagina con una lista di contenuti mandati a schermo
// scrivere una function per randomizzare la home
//collegamenti: <a href="./pagina_due.html?idAlbum=${dates[i].album.id}"></a>
//              <a href="./pagina_tre.html?idAlbum=${dates[i].artist.id}"></a>

//fare gli addEventListner per quando viene effettuata la call nella home principale
//scrivere fanction separate in ogni script; inizializzare la fetch con un if: fare un forEach o for, per creare contenuti nella pagina di riferimento.
//ricordare a lidia che questo lavoro lo sto facendo da solo. :D
window.onload = () => {
  playlist();
  query();
  cardsContainer()
}