function contarVogais(str) {

    str = str.toLowerCase();
  
    var contador = 0;
  
    for (var i = 0; i < str.length; i++) {
      var caractere = str[i];
 
      if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
        contador++;
      }
    }

    return contador;

  }
  
  var minhaString = "A B C D E F G H I";
  var qtdVogais = contarVogais(minhaString);
  console.log("Quantidade de vogais :", qtdVogais);
  