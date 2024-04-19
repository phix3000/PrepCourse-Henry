function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let newArray = array.filter(elemento => elemento%2 === 0);
  return newArray;
}

module.exports = filtrarNumerosPares;
