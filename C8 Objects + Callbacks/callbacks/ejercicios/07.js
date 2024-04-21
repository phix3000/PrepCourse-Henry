function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let newArray = [];
   for(let i = 0;i<arrayOfStrings.length-1;i++){
      if(arrayOfStrings[i][0] === 'a' || arrayOfStrings[i][0] === 'A'){
      newArray.push(arrayOfStrings[i]);
      }
   }
   return newArray;
/*    return arrayOfStrings.filter(elemento => elemento.startsWith('a') || elemento.startsWith('A')); */

}

module.exports = filter;
