function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  /* Estás utilizando indexOf() para obtener el índice de cada elemento en el arreglo. Sin embargo, esto puede causar problemas si el elemento aparece más de una vez en el arreglo, ya que indexOf() devuelve el índice de la primera ocurrencia del elemento en el arreglo.
  */
  // return array.map(elemento => elemento * array.indexOf(elemento));
  //----------------------------------------------------------
  /* el segundo enfoque pueda funcionar en algunos casos, es más seguro y preciso utilizar el índice proporcionado por la función de devolución de llamada de map(), ya que garantiza que cada elemento se multiplicará por su índice real en el arreglo. */
  return array.map((elemento, indice) => elemento * indice);

}

module.exports = multiplicarElementosPorIndice;
