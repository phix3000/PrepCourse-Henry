function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  // Usando ciclo for
   /* // Itera sobre cada usuario en el arreglo
   for (let i = 0; i < objetoMuchosUsuarios.length; i++) {
    // Establece la propiedad "esPremium" como true para cada usuario
    objetoMuchosUsuarios[i].esPremium = true;
  }
  
  // Retorna el arreglo de usuarios con la propiedad "esPremium" definida como true
  return objetoMuchosUsuarios; */
  //Usando el ciclo for in 
 /*  for (let usuario of objetoMuchosUsuarios) {
    // Itera sobre cada propiedad del usuario
    for (let propiedad in usuario) {
      // Verifica si la propiedad es "esPremium"
      if (propiedad === "esPremium") {
        // Establece la propiedad "esPremium" como true para el usuario
        usuario[propiedad] = true;
      }
    }
  }
  
  // Retorna el arreglo de usuarios con la propiedad "esPremium" definida como true
  return objetoMuchosUsuarios; */
  // Metodo resumido------------------------------------------------
    return objetoMuchosUsuarios.map(usuario => {
    usuario.esPremium = true;
    return usuario;
  });
}

module.exports = pasarUsuarioAPremium;
