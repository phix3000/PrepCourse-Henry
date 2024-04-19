function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  /* while (numero%2 === 0){
    numero = numero/2
  }
  return (numero === 1 ? true:false); */
  
  //Ultra simplificando el while
  while (numero > 1 && numero % 2 === 0) numero /= 2;
  return numero === 1 ? true : false;
}

module.exports = esPotenciaDeDos;
