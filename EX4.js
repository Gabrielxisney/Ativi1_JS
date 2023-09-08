var nome = "Gabriel Alexandre Rosa";

var partesNome = nome.split(" ");
var primeiroNome = partesNome[0].toLowerCase();
var ultimoNome = partesNome[partesNome.length - 1].toLowerCase();

var email = primeiroNome + "." + ultimoNome + "@facens.br";

console.log("Endereço de e-mail: " + email);
