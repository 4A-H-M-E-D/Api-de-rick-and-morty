
const contenedorCards = document.querySelector("#contenedor-cards")
const templateCards = document.querySelector("#templateCards")
const fragment = document.createDocumentFragment();


document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

const fetchData = async () => {
    try {
        loadingData(true);
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const data = await res.json();
        pintarCards(data);
    } catch (error) {
        
    } finally {
        loadingData();
    }
}

const pintarCards = (data) => {
    console.log(data.results);
    data.results.forEach(resultados => {
        const clon = templateCards.content.cloneNode(true);
        clon.querySelector("img").setAttribute("src", resultados.image);
        clon.querySelector(".card-title").textContent = resultados.name;
        clon.querySelector(".parrafo").textContent = resultados.species;
        fragment.appendChild(clon);
    });
    contenedorCards.appendChild(fragment);
}



const loadingData = (estado) => {
    const loading = document.querySelector(".loader")
    
    if(estado) {
        loading.classList.remove("d-none");
    } else {
        loading.classList.add("d-none");
    }
}
