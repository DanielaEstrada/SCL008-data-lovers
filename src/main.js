/* Manejo del DOM */
const btnCategorias = document.getElementsByTagName('button')[0];

btnCategorias.addEventListener('click', (function Name() {
  let nombre=document.getElementById("btnn").value;;
  document.getElementById("nombre").innerHTML}) => {
  document.getElementById('root').innerHTML = '';
  document.getElementById('root').innerHTML += `<h1>Categorías</h1>
  <h3>Bienvenido ${name}</h3>
  <button class="water"><img src="img/Agua.png" alt=""</a></button>
  <button class="fire"><img src="img/Fuego.png" alt=""></button>
  <button class="grass"><img src="img/Planta.png" alt=""></button>
  <button class="ground"><img src="img/Tierra.png" alt=""></button>
  <button class="rock"><img src="img/Roca.png" alt=""></button>
  <button class="ice"><img src="img/Hielo.png" alt=""></button>
  <button class="electric"><img src="img/Electrico.png" alt=""></button>
  <button class="dragon"><img src="img/Dragon.png" alt=""></button>
  <button class="ghost"><img src="img/Fantasma.png" alt=""></button>
  <button class="psychic"><img src="img/Psiquico.png" alt=""></button>
  <button class="normal"><img src="img/Normal.png" alt=""></button>
  <button class="fighting"><img src="img/Lucha.png" alt=""></button>
  <button class="poison"><img src="img/Veneno.png" alt=""></button>
  <button class="bug"><img src="img/Insecto.png" alt=""></button>
  <button class="flying"><img src="img/Volador.png" alt=""></button>`
})

const btnAgua = document.getElementsByTagName('button')[1];

btnAgua.addEventListener('click', () => {
  document.getElementById('category').innerHTML = '';
  document.getElementById('category').innerHTML += `<a href="subcategorias.html"><h1>"Hola Yany"</h1>`
})
