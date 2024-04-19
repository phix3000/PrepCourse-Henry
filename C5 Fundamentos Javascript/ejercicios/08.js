function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:

  return numero === Math.round(numero);
}
// Verifica si el número es igual a su versión redondeada al entero más cercano
// Si son iguales, entonces el número es un entero y retorna true, else false.
module.exports = esNumeroEntero;