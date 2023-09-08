function inverterString(str) {
    var stringInvertida = str.split('').reverse().join('');
    return stringInvertida;
  }

  var minhaString = "Linux eh melhor";
  var stringInvertida = inverterString(minhaString);
  console.log(stringInvertida);
  