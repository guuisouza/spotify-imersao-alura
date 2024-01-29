// const searchInput2 = document.querySelector(".cards") /* Pega o primeiro elemento com esta classe */
// const searchInput2 = document.querySelectorAll(".cards") /* Pega todas as classe */

// Faremos manipulação de eventos (Tudo que tem interação na tela, seja do usuário ou não)
const searchInput = document.getElementById("search-input")
// Constante que pega a parte que mostra os cards
const resultArtist = document.getElementById("result-artist")
//Constante para manipular quando as playlists vão aparecer
const resultPlaylist = document.getElementById("result-playlists")

function requestApi(searchTerm) { // Consumirá a API usando o fetch
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

// Funcao displayResults
function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name') // Pega o nome do artista
    const artistImage = document.getElementById('artist-img') // Pega o nome do artista

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden')
}

// addEventListenner = "Escuta" o evento para quando ele for ativado X coisa aconteça
document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase()
    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden')
        resultArtist.classList.add('hidden')
        return
    }

    requestApi(searchTerm)
})    