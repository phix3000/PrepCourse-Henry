function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:
   function compare(a, b) {
      if (a[sortBy] < b[sortBy]) {
        return 1; // Retorna 1 si a debe venir después de b
      }
      if (a[sortBy] > b[sortBy]) {
        return -1; // Retorna -1 si a debe venir antes de b
      }
      return 0; // Retorna 0 si a y b son iguales
    }
  
    // Ordena la lista utilizando la función de comparación personalizada
    return list.sort(compare);
}

module.exports = sort;
