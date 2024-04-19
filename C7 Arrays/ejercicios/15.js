function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // 
  //Tu código:
  let numMax = 0; // Asigna el primer elemento del arreglo a numMax
  for (let i = 1; i < array.length; i++) { // Comienza desde el segundo elemento
      if (array[i] > array[numMax]) { // Compara cada elemento con numMax
          numMax = i; // Si el elemento actual es mayor que numMax, actualiza numMax
      }
  }
  return numMax; // Retorna el número máximo encontrado
}

module.exports = encontrarIndiceMayor;