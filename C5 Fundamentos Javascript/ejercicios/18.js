function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
/*   return letra.length > 1 ? "Dato incorrecto": letra === 'a' ? "Es vocal": letra === 'e' ? "Es vocal": letra === 'i' ? "Es vocal": letra === 'o' ? "Es vocal": letra === 'u' ? "Es vocal": "Dato incorrecto";
 */
  return letra.length > 1 || !['a', 'e', 'i', 'o', 'u'].includes(letra) ? "Dato incorrecto" : "Es vocal";

}

module.exports = esVocal;
