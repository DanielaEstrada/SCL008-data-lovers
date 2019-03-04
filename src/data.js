window.pokemonData = {

  //Funcion de orden.
  sortData: (data, selectedOrder) => {
 
 //Si el orden seleccionado es a-z, organiza y retorna la data con el nuevo orden
    if (selectedOrder === "az") {
      const sortedData = data;
      data.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      })
      return sortedData;
    }
 
    //Si el orden seleccionado es z-a, organiza y retorna la data con el nuevo orden
    if (selectedOrder === "za") {
      const sortedData = data;
      data.sort(function (a, b) {
        if (b.name < a.name) {
          return -1;
        }
        if (b.name > a.name) {
          return 1;
        }
      })
      return sortedData;
    }
  }