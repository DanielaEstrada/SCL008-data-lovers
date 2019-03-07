// Manejo de data 
function filterData(data, condition) {
 const filteredData = data.filter(element => {
      return element.type.includes(condition)
    })
<<<<<<< HEAD
    return filteredData
  }

  window.filterData = filterData;
  window.showData = showData;
=======
    return filteredData;
};
>>>>>>> 74a30b523e86f4b6b38e7acccf24d4c74f79d280
