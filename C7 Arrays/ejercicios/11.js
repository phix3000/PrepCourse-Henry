function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  /* let newArray = []
  for(let i=0;i<array.length;i++){
    newArray[i] = array[i]*2;
  }
  return newArray; */
  return array.map(elemento => elemento*2);
}

module.exports = duplicarElementos;
