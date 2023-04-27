const body = document.querySelector('body');
const pokemonsList = document.getElementById('pokemon-list');

// API DOCS - https://pokeapi.co/

console.log('ASYNC AWAIT EXAMPLE');

const loadPokemons = async () => {
  try {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=100'); // Asynchronous operation - must be awaited

    console.log('response', response);
    const data = await response.json(); // Asynchronous operation - must be awaited

    console.log('DATA  ', data);
    data.results.forEach((pokemon, index) => {
      const listItem = document.createElement('li');
      const name = document.createTextNode(`${index + 1} - ${pokemon.name}`);

      listItem.appendChild(name);
      pokemonsList.appendChild(listItem);

      listItem.addEventListener('click', event => {
        selectPokemon(event.target);
      });
    });
  } catch (error) {
    console.error('Error fetching the Pokemons', error);
  }
};

const selectPokemon = listItem => {
  const pokemonIndex = Number.parseInt(listItem.innerHTML);
  let nameOfSelected = document.getElementById('name');
  const imageOfSelected = document.getElementById('selected-image');

  nameOfSelected.innerHTML = listItem.innerHTML.toUpperCase();
  nameOfSelected.style.visibility = 'visible';
  nameOfSelected.style.display = 'visible';
  imageOfSelected.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
};

loadPokemons();
index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="style.css">
  <title>Pokedex List</title>

</head>

<body>
  <nav>
    <img id="logo" src="https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png" alt="">
  </nav>
  <main>
    <header>  
      <h3> JS Promises & async/await </h3>
    </header>
    <section>
      <h4 id="name"></h4>
      <img src="" id="selected-image">
    </section>

    <ul id="pokemon-list"></ul>
  
  </main>
  
  <script src="./promiseExample.js"></script>
  <!-- <script src="./asyncAwaitExample.js"></script> -->
  <!-- <script src="./wrongAsyncAwaitExample.js"></script> -->
</body>
</html>