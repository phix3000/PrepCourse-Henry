function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   
   // Genera un número aleatorio entre 0 y 1
   // Multiplica por la longitud del array para obtener un índice aleatorio
   // Utiliza Math.floor() para redondear hacia abajo y obtener un número entero
   var indiceAleatorio = Math.floor(Math.random() * array.length);
   // Retorna el elemento en el índice aleatorio
   return array[indiceAleatorio];
}

module.exports = obtenerElementoAleatorio;
