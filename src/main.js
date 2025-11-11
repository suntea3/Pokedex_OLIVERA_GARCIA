const API = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

async function Mostrarpokedex() {
  try {
    const res = await fetch(API);
    const pokedex = await res.json();
    const sectionEl = document.getElementById("pokedex");
    const pokemons = pokedex.results;

    let numero = 1;

    for (const { name } of pokemons) {
      const pokeDatos = document.createElement("div");
      pokeDatos.classList.add("card");
      pokeDatos.dataset.name = name.toLowerCase();

      const ImagenPokemon = `https://pokeapi.co/api/v2/pokemon/${numero}`;

      try {
        const res = await fetch(ImagenPokemon);
        const pokemon = await res.json();
        const Imagen = pokemon.sprites.other.dream_world.front_default;

        const pokeImagen = document.createElement("img");
        pokeImagen.src = Imagen;
        pokeDatos.appendChild(pokeImagen);
      } catch (err) {
        console.error("Error al cargar imagen:", err);
      }

      const nombreEl = document.createElement("p");
      nombreEl.textContent = `#${numero} ${
        name.charAt(0).toUpperCase() + name.slice(1)
      }`;
      pokeDatos.appendChild(nombreEl);

      sectionEl.appendChild(pokeDatos);
      numero++;
    }
  } catch (err) {
    console.error("Error al cargar pokedex:", err);
  }
}

const header = document.createElement("div");
header.classList.add("controls");

const ElInput = document.createElement("input");
ElInput.type = "text";
ElInput.placeholder = "Buscar Pokémon...";
ElInput.classList.add("buscar-input");

const btnFavoritos = document.createElement("button");
btnFavoritos.textContent = "Ver Favoritos";
btnFavoritos.classList.add("btn-favoritos");

header.appendChild(ElInput);
header.appendChild(btnFavoritos);
document.body.insertBefore(header, document.getElementById("pokedex"));

ElInput.addEventListener("input", (evento) => {
  const consulta = evento.target.value.trim().toLowerCase();
  const container = document.getElementById("pokedex");
  Array.from(container.children).forEach((child) => {
    const name = child.dataset.name || "";
    child.style.display =
      consulta === "" ? "" : name.includes(consulta) ? "" : "none";
  });
});

Mostrarpokedex();
