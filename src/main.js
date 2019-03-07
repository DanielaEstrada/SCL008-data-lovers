const data = window.POKEMON.pokemon;
const pokeFilter = document.getElementById('root'); 
/* Manejo del DOM */

window.onload = () => {
 document.getElementById("page1").style.display="block";
 document.getElementById("page2").style.display ="none";
 document.getElementById("page3").style.display="none";
}
//document.getElementById("pagina2").addEventListener("click",() => {
//let username= document.getElementById("name").value
//document.getElementById("page2").innerHTML = "hola " + username;
 document.getElementById("page1").style.display="none";
 document.getElementById("page2").style.display ="block";
 document.getElementById("page3").style.display="none";
 //});
document.getElementById("typecards").addEventListener("click",() => {
 document.getElementById("page1").style.display="none";
 document.getElementById("page2").style.display ="none";
 document.getElementById("page3").style.display="block";
});

const showData = (data) =>{
  let resultshowdata=" ";
data.forEach(element => {
  resultshowdata=pokeFilter.innerHTML +=
  
  `<div class="target col s7 m4 l3">
    <div class="card small">
    <a class="buttonCard" id="infobtn${element.id}" data-target="modal1">
    <div class="card-title">#${element.num} ${element.name}</div>
    <div class="card-image" style="overflow: initial">
    <img class="responsive-img" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.num}.png">
    </div>
    <div class="card-content">
    <p>${element.type.join(" - ")}</p>
    </div>
    </a>
    </div>
    </div>`
     })
return resultshowdata;
 
};

let select = document.getElementById("type");
select.addEventListener("change", () => {
  let condition = select.value;
  //console.log(condition);
  let resultFilter = filterData(data,condition);
 pokeFilter.innerHTML="";//limpio el div
  resultFilter.forEach(element => {

  pokeFilter.innerHTML +=
  `<div class="target col-xl-2 col-lg-3 col-md-6 col-sm6 col-8">
    <div class="card">
    <div class="img">
    <div class="card-title">
    <h2>${element.name}</h2>
    </div>
    <img src=" ${element.img} ">
    </div>
    <h4> #${element.num}</h4>
    <h4>Tipo:${element.type.join(" - ")}</h4>
    <p>Debilidad con Pókemon tipo: ${element.weaknesses}</p>  
    </div>
    </div>
    </div>`
     });


});






