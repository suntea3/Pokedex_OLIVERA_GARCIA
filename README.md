📘 Pokédex – Primera Generación

Trabajo Práctico II – Programación 3 – UTN San Nicolás
Autores: Santiago Olivera y Valentín García

🧾 Descripción del Proyecto

Este proyecto es una Pokédex interactiva de los 151 Pokémon de la Primera Generación, desarrollada como parte del Trabajo Práctico Nº2 de la materia Programación 3 (UTN San Nicolás).
La idea del trabajo es consumir información desde una API externa, manejar asincronía, manipular el DOM, trabajar con módulos y aplicar buenas prácticas de JavaScript moderno.

La aplicación permite:

Ver todos los Pokémon de la primera generación.

Visualizar su número, nombre, imagen oficial y tipos.

Marcar Pokémon como favoritos y verlos en un panel dedicado.

Buscar Pokémon por nombre mediante un buscador con animación desplegable.

Alternar entre modo claro/oscuro.

Navegar en una interfaz responsive al estilo Pokédex.

Todo el proyecto está hecho sin frameworks externos (más allá del entorno de desarrollo): HTML, CSS y JavaScript modular.

El deploy final está disponible en Vercel:
👉 https://pokegarciaolivera.vercel.app

🛠️ Tecnologías y Herramientas Utilizadas
🔹 Vite

Usamos Vite como entorno de desarrollo porque permite trabajar con módulos de forma nativa, refresco en caliente (HMR) y una estructura más ordenada para proyectos front-end.
Además, facilita mucho el deploy en servicios como Vercel.

🔹 JavaScript (ES Modules)

Gran parte del trabajo fue realizado con:

Funciones asíncronas (async/await)

Fetch API

Manipulación del DOM

Gestión del estado (favoritos guardados en localStorage)

Modularización del código con import / export

Ambos —Santiago Olivera y Valentín García— trabajamos de manera conjunta en el desarrollo del JavaScript, dividiendo tareas de forma equitativa.

🔹 API externa: PokéAPI

Consumimos la API oficial:

https://pokeapi.co/api/v2/pokemon?limit=151&offset=0


Cada Pokémon se obtiene en tiempo real desde la PokéAPI y se renderiza en tarjetas dinámicas dentro de la Pokédex.

🔹 HTML y CSS

El diseño fue inspirado en una estética tipo Pokédex.
Se trabajó especialmente en:

Tarjetas visuales atractivas

Animaciones suaves

Modo oscuro

Layout responsive

Barra de búsqueda con animación desplegable

En cuanto a la distribución del trabajo, Valentín García se encargó un poco más del diseño en CSS, mientras que Santiago Olivera se enfocó más en la parte asincrónica y el sistema de carga. Pero el desarrollo general de JavaScript fue compartido en igualdad.

✨ Características de la Aplicación
✔️ Galería de Pokémon

Se cargan las 151 criaturas originales con su foto oficial, sus tipos y número en la Pokédex.

✔️ Sistema de Favoritos

Los favoritos se guardan en localStorage.

Hay un panel emergente donde se pueden ver todos.

Botones intuitivos para agregar o quitar Pokémon.

✔️ Modo Claro/Oscuro

Se implementó un switch que alterna entre ambos temas modificando variables CSS con transiciones suaves.

✔️ Totalmente Responsive

Funciona correctamente tanto en computadoras como en celulares.

📦 Instalación y Ejecución (para desarrollo)

Clonar el repositorio:

git clone https://github.com/tuusuario/tu-repo.git


Instalar dependencias:

npm install


Ejecutar el entorno de desarrollo con Vite:

npm run dev


Abrir en el navegador la URL que indica la consola (generalmente http://localhost:5173
).

🚀 Deploy

El proyecto se encuentra deployado en Vercel:
👉 https://pokegarciaolivera.vercel.app

🎓 Conclusión

Este trabajo nos permitió practicar conceptos fundamentales de la materia:

Consumo de APIs

Asincronía en JavaScript

Modularización

Diseño responsive

Manejo del DOM y eventos

Uso de Vite como herramienta moderna de desarrollo

El resultado es una Pokédex completa, funcional y visualmente agradable, que integra todos los contenidos vistos en clase aplicados a un proyecto real.
