function validaEmail(email) {

    var indiceArroba = email.indexOf('@');
    if (indiceArroba === -1 || email.indexOf('@', indiceArroba + 1) !== -1) {
      return false;
    }
  
    var partes = email.split('@');
  
    if (partes.length !== 2 || partes[1].indexOf('.') === -1) {
      return false;
    }
  
    return true;
  }
  console.log(validaEmail("galexandrerosa@gmail.com"));
  console.log(validaEmail("@211928@facens.br"));
  console.log(validaEmail("edson.feitosa@facens.br"));
  