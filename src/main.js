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
