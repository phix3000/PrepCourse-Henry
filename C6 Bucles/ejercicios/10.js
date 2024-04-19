function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
  /* return num === 10 || num === 5; */
  return [10, 5].includes(num);
}

module.exports = esDiezOCinco;
