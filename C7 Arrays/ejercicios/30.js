function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  // Creamos un conjunto para almacenar los elementos únicos que hemos visto
  /* const conjunto = new Set();

  // Iteramos sobre el array
  for (let i = 0; i < numeros.length; i++) {
    // Verificamos si el elemento actual ya está en el conjunto
    if (conjunto.has(numeros[i])) {
      // Si está en el conjunto, es el primer elemento repetido, lo devolvemos
      return numeros[i];
    } else {
      // Si no está en el conjunto, lo agregamos al conjunto
      conjunto.add(numeros[i]);
    }
    return conjunto;
  } */

  //Con un ciclo for
  let numRep;
  for (let i = 0; i < numeros.length - 1; i++) {
    for (let j = i + 1; j < numeros.length; j++) { // Corrección aquí
      if (numeros[i] === numeros[j]) {
        numRep = numeros[i];
      }
    }
  }
  return numRep
}

module.exports = encontrarElementoRepetido;