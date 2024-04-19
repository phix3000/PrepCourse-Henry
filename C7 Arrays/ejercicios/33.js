function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  let result = ''; // Inicializamos la cadena de resultado
    
    // Iteramos sobre la longitud máxima de las tres cadenas
    for (let i = 0; i < Math.max(str1.length, str2.length, str3.length); i++) {
        // Si el carácter en la posición i de la cadena str1 no está vacío, lo agregamos al resultado
        if (str1[i] !== undefined && str1[i] !== '') {
            result += str1[i];
        }
        // Si el carácter en la posición i de la cadena str2 no está vacío, lo agregamos al resultado
        if (str2[i] !== undefined && str2[i] !== '') {
            result += str2[i];
        }
        // Si el carácter en la posición i de la cadena str3 no está vacío, lo agregamos al resultado
        if (str3[i] !== undefined && str3[i] !== '') {
            result += str3[i];
        }
    }
    
    return result;
}

module.exports = combine;