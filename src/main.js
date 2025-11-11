const API = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

async function Mostrarpokedex() {
  try {
    const res = await fetch(API);
    const pokedex = await res.json();
    const sectionEl = document.getElementById("pokedex");
    const pokemons = pokedex.results;

    let numero = 1;

    pokemons.forEach(({ name }) => {
      const pokeDatos = document.createElement("div");
      pokeDatos.classList.add("card");
      const ImagenPokemon = `https://pokeapi.co/api/v2/pokemon/${numero}`;
      const nombreCapitalizado = name.charAt(0).toUpperCase() + name.slice(1);

      async function MostrarImagen() {
        try {
          const res = await fetch(ImagenPokemon);
          const pokemon = await res.json();
          const Imagen = pokemon.sprites.other.dream_world.front_default;

          const pokeImagen = document.createElement("img");
          pokeImagen.src = Imagen;
          pokeDatos.appendChild(pokeImagen);
        } catch (err) {
          console.error("Error:", err);
        }
      }
      MostrarImagen();
      pokeDatos.innerHTML = `
        <div class="numPoke">
          <span>#${numero}</span>
        </div>

        <div class="pokeCard">
            <p>${nombreCapitalizado}</p>
        </div>

      `;
      sectionEl.appendChild(pokeDatos);
      numero++;
    });
  } catch (err) {
    console.error("Error:", err);
  }
}

const header = document.createElement("div");
header.classList.add("controls");

const inputBuscar = document.createElement("input");
inputBuscar.type = "text";
inputBuscar.placeholder = "Buscar Pokémon...";
inputBuscar.classList.add("buscar-input");

const btnFavoritos = document.createElement("button");
btnFavoritos.textContent = "Ver Favoritos";
btnFavoritos.classList.add("btn-favoritos");

header.appendChild(inputBuscar);
header.appendChild(btnFavoritos);
document.body.insertBefore(header, document.getElementById("pokedex"));


Mostrarpokedex();
