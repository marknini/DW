function verificarTriangulo() {
    const a = parseFloat(document.getElementById("lado1").value);
    const b = parseFloat(document.getElementById("lado2").value);
    const c = parseFloat(document.getElementById("lado3").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      resultado.innerText = "Preencha todos os lados corretamente.";
      return;
    }
  
    if (a + b > c && a + c > b && b + c > a) {
      if (a === b && b === c) {
        resultado.innerText = "Triângulo Equilátero";
      } else if (a === b || a === c || b === c) {
        resultado.innerText = "Triângulo Isósceles";
      } else {
        resultado.innerText = "Triângulo Escaleno";
      }
    } else {
      resultado.innerText = "Os valores informados NÃO formam um triângulo.";
    }
  }