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
      const ImagenPokemon = `https://pokeapi.co/api/v2/pokemon/${numero}`;

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
      pokeDatos.innerHTML = `<p>#${numero} Nombre: ${name}</p>`;
      sectionEl.appendChild(pokeDatos);
      numero++;
    });
  } catch (err) {
    console.error("Error:", err);
  }
}

Mostrarpokedex();
