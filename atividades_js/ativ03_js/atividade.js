function calcularOperacoes() {
    for (let i = 0; i < 5; i++) {
      let num1 = Math.floor(Math.random() * 10) + 1;
      let num2 = Math.floor(Math.random() * 10) + 1;
  
      console.log(`Operação ${i + 1}:`);
      console.log(`Números sorteados: ${num1} e ${num2}`);
  
      console.log(`${num1} + ${num2} = ${num1 + num2}`); // Sem .toFixed() para números inteiros
  
      console.log(`${num1} - ${num2} = ${num1 - num2}`); // Sem .toFixed() para números inteiros
  
      console.log(`${num1} * ${num2} = ${num1 * num2}`); // Sem .toFixed() para números inteiros
  
      console.log(`${num1} / ${num2} = ${(num1 / num2).toFixed(3)}`); // .toFixed(3) para números com ponto flutuante
  
      console.log("--------------------");
    }
  }
  
  // Chamando a função
  calcularOperacoes();