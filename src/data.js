// Manejo de data 
function filterData(data, condition) {
 const filteredData = data.filter(element => {
      return element.type.includes(condition)
    })
    return filteredData;
  };