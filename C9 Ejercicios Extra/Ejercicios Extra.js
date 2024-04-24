/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  const resultado = [];
  for (let clave in objeto) {
    if (Object.hasOwnProperty.call(objeto, clave)) {
      resultado.push([clave, objeto[clave]]);
    }
  }
  return resultado;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  // Creamos un objeto para almacenar la cantidad de veces que aparece cada letra
  let count = {};

  // Recorremos el string
  for (let i = 0; i < string.length; i++) {
    // Obtenemos la letra en la posición actual
    let letter = string[i];

    // Si la letra ya está en el objeto, incrementamos su contador
    // Si no está, inicializamos su contador en 1
    if (count[letter]) {
      count[letter]++;
    } else {
      count[letter] = 1;
    }
  }

  // Ordenamos las claves del objeto alfabéticamente
  let sortedCount = {};
  Object.keys(count).sort().forEach(function(key) {
    sortedCount[key] = count[key];
  });

  return sortedCount;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let uppercaseLetters = '';
  let lowercaseLetters = '';

  // Separar las letras en mayúscula y minúscula
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      uppercaseLetters += string[i];
    } else {
      lowercaseLetters += string[i];
    }
  }
  // Construir el string resultante
  return uppercaseLetters + lowercaseLetters;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
 
  // Dividir la frase en palabras usando split(' ')
  let palabras = frase.split(' ');
  // Crear un array para almacenar las palabras invertidas
  let palabrasInvertidas = [];
  // Iterar sobre cada palabra en el array de palabras
  for (let palabra of palabras) {
      // Invertir el orden de los caracteres de la palabra y agregarla al array de palabras invertidas
      palabrasInvertidas.push(palabra.split('').reverse().join(''));
  }
  let fraseInvertida = palabrasInvertidas.join(' ');
  return fraseInvertida;
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
   // Convertir el número a una cadena de caracteres
   let numStr = numero.toString();
   // Obtener la longitud del número
   let longitud = numStr.length;
   for (let i = 0; i < longitud / 2; i++) {
    // Comparar el dígito actual con su dígito correspondiente en el extremo opuesto
    if (numStr[i] !== numStr[longitud - 1 - i]) {
        // Si los dígitos no son iguales, retornar "No es capicua"
        return "No es capicua";
    }
}
// Si todos los dígitos coinciden, retornar "Es capicua"
return "Es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  const eliminar = ['a','b','c'];
  let fraseMod = '';
  
  for (let i=0;i<string.length;i++){
    if(!eliminar.includes(string[i])){
      fraseMod += string[i];
    }
  }
  return fraseMod;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let interseccion = [];

  // Iterar sobre cada elemento del primer arreglo
  for (let i = 0; i < array1.length; i++) {
      // Verificar si el elemento actual está presente en el segundo arreglo
      if (array2.includes(array1[i])) {
          // Si está presente, agregarlo al arreglo de intersección si aún no está ahí
          if (!interseccion.includes(array1[i])) {
              interseccion.push(array1[i]);
          }
      }
  }

  // Retornar el arreglo de intersección
  return interseccion;
}
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
