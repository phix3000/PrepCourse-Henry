function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let suma=0;
  for(let i=0;i<resultadosTest.length;i++){
    suma += resultadosTest[i];
  }
  return (suma/resultadosTest.length);


  /* const sumaTotal = resultadosTest.reduce((acumulador, nota) => acumulador + nota, 0);
  return sumaTotal / resultadosTest.length; */
}

module.exports = promedioResultadosTest;
