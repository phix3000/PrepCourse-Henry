const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  return Object.keys(objeto).length;
  //usando el bucle for in
  /* let count = 0;
  for(prip in objeto){
    count+=1;
  }
  return count; */
};

module.exports = contarPropiedades;
