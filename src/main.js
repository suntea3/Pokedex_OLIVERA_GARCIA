const API = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

async function mostrarPokedex() {
  const contenedor = document.getElementById("pokedex");
  try {
    const data = await (await fetch(API)).json();
    for (let i = 1; i <= data.results.length; i++) {
      const pokemon = await (
        await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      ).json();
      const img =
        pokemon.sprites.other?.dream_world?.front_default ||
        pokemon.sprites.other?.["official-artwork"]?.front_default ||
        pokemon.sprites.front_default ||
        "src/img/placeholder.png";
      const card = document.createElement("div");
      card.className = "card";
      card.dataset.name = pokemon.name.toLowerCase();
      card.innerHTML = `
        <img src="${img}" alt="${pokemon.name}">
        <div class="numPoke">#${pokemon.id}</div>
        <p><strong>${
          pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
        }</strong></p>
        <p class="info-poke">Tipo: ${pokemon.types
          .map((t) => t.type.name)
          .join(", ")}</p>
        <p class="info-poke">Habilidades: ${pokemon.abilities
          .slice(0, 2)
          .map((a) => a.ability.name)
          .join(", ")}</p>
        <button class="btn-fav">Agregar a Favoritos</button>
      `;
      card
        .querySelector(".btn-fav")
        .addEventListener("click", () => manejarFavorito(pokemon));
      contenedor.appendChild(card);
    }
  } catch (e) {
    console.error("Error al cargar la Pokédex:", e);
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
