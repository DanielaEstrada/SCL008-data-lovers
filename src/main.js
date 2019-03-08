const data = window.POKEMON.pokemon;
const pokeFilter = document.getElementById('root'); 
/* Manejo del DOM */

window.onload = () => {
 document.getElementById("page1").style.display="block";
 document.getElementById("page2").style.display ="none";
 document.getElementById("page3").style.display="none";
}
 document.getElementById("pagina2").addEventListener("click",() => {
 document.getElementById("page1").style.display="none";
 document.getElementById("page2").style.display ="block";
 document.getElementById("page3").style.display="none";
 });
document.getElementById("typecards").addEventListener("click",() => {
 document.getElementById("page1").style.display="none";
 document.getElementById("page2").style.display ="none";
 document.getElementById("page3").style.display="block";
});

window.showData = (data) =>{
  let resultshowdata=" ";
data.forEach(element => {
  resultshowdata=pokeFilter.innerHTML ='';
  resultshowdata=pokeFilter.innerHTML +=
  
  `<div class="target col-xl-2 col-lg-3 col-d-6 col-sm6 col-8">
    <div class="card">
    <div class="img">
    <div class="card-title">
    <h2>${element.name}</h2>
    <img src=" ${element.img} ">
    </div>
    <h4> #${element.num}</h4>
    <h4>Tipo:${element.type.join(" - ")}</h4>
    <p>Debilidad con Pókemon tipo: ${element.weaknesses}</p>
    <p class="datos2">Posibilidad de encontrarlo: ${element.spawn_chance}%</p>
    <p class="datos2">Hora de mayor actividad: ${element.spawn_time}hrs.</p>
    <p class="datos2">Debilidad con Pókemon tipo: ${element.weaknesses}</p>
    </div>
    </div>
    </div>`
     })
return resultshowdata;
 
};
let select = document.getElementById("type");
select.addEventListener("change", () => {
  let condition = select.value;
  //console.log(condition);
  let resultFilter = window.filterData( data,condition);
 pokeFilter.innerHTML="";//limpio el div
  resultFilter.forEach(element => {

  pokeFilter.innerHTML +=
  `<div class="target col-xl-2 col-lg-3 col-d-6 col-sm6 col-8">
    <div class="card">
    <div class="img">
    <div class="card-title">
    <h2>${element.name}</h2>
    <img src=" ${element.img} ">
    </div>
    <h4> #${element.num}</h4>
    <h4>Tipo:${element.type.join(" - ")}</h4>
    <p>Debilidad con Pókemon tipo: ${element.weaknesses}</p>
    <p class="datos2">Posibilidad de encontrarlo: ${element.spawn_chance}%</p>
    <p class="datos2">Hora de mayor actividad: ${element.spawn_time}hrs.</p>
    <p class="datos2">Debilidad con Pókemon tipo: ${element.weaknesses}</p>
    </div>
    </div>
    </div>`
     });



/*let total = document.getElementById("root");
let createTotal;

createTotal = document.createElement("h5");
total.appendChild(createTotal);
createTotal.innerHTML = `Total selección: ${totalPokemon}`;*/
});

