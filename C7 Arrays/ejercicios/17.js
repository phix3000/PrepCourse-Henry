function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  //return arrayOfNums.forEach(elemento => elemento+elemento);
  /* let suma=0;
  for(let i = 0;i<arrayOfNums.length;i++){
    suma +=arrayOfNums[i];
  }
  return suma; */
  // Simplificada usando reduce()
  return arrayOfNums.reduce((acumulador, elemento) => acumulador + elemento, 0);

}

module.exports = agregarNumeros;
