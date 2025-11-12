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

document.getElementById("buscador").addEventListener("input", (e) => {
  const texto = e.target.value.toLowerCase();
  document.querySelectorAll(".card").forEach((card) => {
    card.style.display = card.dataset.name.includes(texto) ? "" : "none";
  });
});

const getFavs = () => JSON.parse(localStorage.getItem("favoritos")) || [];
const saveFavs = (f) => localStorage.setItem("favoritos", JSON.stringify(f));

function manejarFavorito(pokemon, desdeFavoritos = false) {
  const favs = getFavs();
  const id = pokemon.id;
  const nombre = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const existe = favs.includes(id);
  if (existe) {
    if (desdeFavoritos) {
      saveFavs(favs.filter((f) => f !== id));
      mostrarMensaje(`${nombre} eliminado de tus favoritos.`, "aviso");
    } else {
      mostrarMensaje(`${nombre} ya está en tus favoritos.`, "aviso");
    }
  } else {
    favs.push(id);
    saveFavs(favs);
    mostrarMensaje(`${nombre} agregado a tus favoritos.`, "ok");
  }
  mostrarFavoritos();
}

async function mostrarFavoritos() {
  const favs = getFavs();
  const lista = document.getElementById("lista-favoritos");
  lista.innerHTML = favs.length ? "" : "<p>Todavía no tenes favoritos.</p>";
  for (const id of favs) {
    try {
      const p = await (
        await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      ).json();
      const img =
        p.sprites.other?.dream_world?.front_default ||
        p.sprites.other?.["official-artwork"]?.front_default ||
        p.sprites.front_default ||
        "src/img/placeholder.png";
      const card = document.createElement("div");
      card.className = "card-fav";
      card.innerHTML = `
        <img src="${img}" alt="${p.name}">
        <p><strong>${p.name[0].toUpperCase() + p.name.slice(1)}</strong></p>
        <button class="btn-remove">Quitar</button>
      `;
      card
        .querySelector(".btn-remove")
        .addEventListener("click", () => manejarFavorito(p, true));
      lista.appendChild(card);
    } catch (e) {
      console.error("Error cargando favorito:", e);
    }
  }
}

function mostrarMensaje(texto, tipo = "ok") {
  const msg = document.createElement("div");
  msg.className = `notificacion ${tipo}`;
  msg.textContent = texto;
  document.body.appendChild(msg);
  setTimeout(() => msg.classList.add("visible"), 50);
  setTimeout(() => {
    msg.classList.remove("visible");
    setTimeout(() => msg.remove(), 300);
  }, 3000);
}

const overlay = document.getElementById("overlay-favoritos");
document.getElementById("btnVerFavoritos").addEventListener("click", () => {
  mostrarFavoritos();
  overlay.classList.add("visible");
});
document
  .getElementById("cerrar-favoritos")
  .addEventListener("click", () => overlay.classList.remove("visible"));

const toggleInput = document.getElementById("toggleTema");
const body = document.body;
if (localStorage.getItem("tema") === "alternativo") {
  body.classList.add("tema-alternativo");
  toggleInput.checked = true;
}
toggleInput.addEventListener("change", () => {
  const esAlternativo = toggleInput.checked;
  body.classList.toggle("tema-alternativo", esAlternativo);
  localStorage.setItem("tema", esAlternativo ? "alternativo" : "verde");
});

mostrarPokedex();
