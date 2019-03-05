/* Manejo del DOM */
const btnCategorias = document.getElementsByTagName('button')[0];

btnCategorias.addEventListener('click', () => {
  let username= document.getElementById("name").value
  document.getElementById('root').innerHTML = '';
  document.getElementById('category').innerHTML = '';
  document.getElementById('root').innerHTML += `<h1>Categorías</h1>
  <h3>Bienvenido ${username}</h3>
  <button class="water"><img src="img/Agua.png" alt="Categoria Agua"></button>
  <button class="fire"><img src="img/Fuego.png" alt="categoria Fuego"></button>
  <button class="grass"><img src="img/Planta.png" alt="Categoria Planta"></button>
  <button class="ground"><img src="img/Tierra.png" alt="Categoria Tierra"></button>
  <button class="rock"><img src="img/Roca.png" alt="Categoria Roca"></button>
  <button class="ice"><img src="img/Hielo.png" alt="Categoria Hielo"></button>
  <button class="electric"><img src="img/Electrico.png" alt="Categoria Eléctrico"></button>
  <button class="dragon"><img src="img/Dragon.png" alt="Categoria Dragón"></button>
  <button class="ghost"><img src="img/Fantasma.png" alt="Categoria Fantasma"></button>
  <button class="psychic"><img src="img/Psiquico.png" alt="Categoria Psiquico"></button>
  <button class="normal"><img src="img/Normal.png" alt="Categoria Normal"></button>
  <button class="fighting"><img src="img/Lucha.png" alt="Categoria Lucha"></button>
  <button class="poison"><img src="img/Veneno.png" alt="Categoria Veneno"></button>
  <button class="bug"><img src="img/Insecto.png" alt="Categoria Insecto"></button>
  <button class="flying"><img src="img/Volador.png" alt="Categoria Volador"></button>`
 })

const btnAgua = document.getElementsByTagName('button')[1];

btnAgua.addEventListener('click', () => {
  document.getElementById('root').innerHTML = '';
  document.getElementById('category').innerHTML = '';
  document.getElementById('category').innerHTML += `<p>Hola Yany</p>`

})

//Módulo pokemones
const data = window.POKEMON.pokemon;

let mainBody = document.getElementsByTagName("body")[0];
let header = document.getElementById("header");
let mainBox = document.getElementById("all-data");

//Imprime tarjetas de todos los pokemones al cargar la página
window.onload = function () {
//window.onload = showData(data)

//limpia div root
mainBox.innerHTML = "";

  //Recorre la data y agrega cada tarjeta con la informacion requerida a mainBox
  data.forEach(element => {
    mainBox.innerHTML +=
    `<div class="col s7 m4 l3">
    <div class="card small">
    <a class="buttonCard" id="infobtn${element.id}" data-target="modal1">
    <div class="card-title">#${element.num} ${element.name}</div>
    <div class="card-image" style="overflow: initial">
    <img class="responsive-img" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png" alt="card-pokemon">
    </div>
    <div class="card-content">
    <p>${element.type.join(" - ")}</p>
    </div>
    </a>
    </div>
    </div>`;
  });

  //Filtra pokemones por el tipo seleccionado e imprime las tarjetas respectivas
document.getElementById("type").addEventListener("change", () => {

  //Limpia div root
  mainBox.innerHTML = "";


  //Trae el valor del orden y el tipo seleccionado
  let selectedOrder = document.getElementById("order").value;
  let selectedType = document.getElementById("type").value;

  //Funcion que organiza para confirmar el orden deseado 
  const dataOnSort = window.pokemonData.sortData(data, selectedOrder);

  //Funcion que filtra dependiendo del tipo seleccionado
  const newData = window.pokemonData.filterData(dataOnSort, selectedType);

  //Calcula el total de pokemones del tipo seleccionado
  const totalPokemon = window.pokemonData.computeStats(newData);

  //Crea enunciado del total de pokemones y lo imprime antes de las tarjetas
  createTotal = document.createElement("h2");
  mainBox.appendChild(createTotal);
  createTotal.innerHTML = `Total de tu selección: ${totalPokemon}`;
});

//crear una función que muestre las tarjetas de la newData
const showPokeData = window.pokemonData(newData, showPokeData);
};