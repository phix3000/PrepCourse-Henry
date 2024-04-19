function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  /* let suma = 0;
  for (let i = 1;i<=n; i++){
    suma += i;
  }
  return suma; */
  // La formula descubierta por Carl Friedrich Gauss
  return (n * (n + 1)) /2;
}

module.exports = sumarHastaN;
