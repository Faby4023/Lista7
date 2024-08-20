//Questão 5
// function soma(a: number, b: number): number {
//     return a + b;
//     const resultado = soma(5, 3);
//     console.log('A soma de 10 e 20 é:', resultado);
// }
//Questão 6
// function isPar(numero: number): boolean {
    
//     return numero % 2 === 0;
// }
// // Exemplos de uso da função
// console.log(isPar(4));  // Saída: true
// console.log(isPar(7));  // Saída: false
//Questão 7
// function media(nota1: number, nota2: number, nota3: number): number {
    
//     return (nota1 + nota2 + nota3) / 3;
// }
// const resultado = media;
// console.log('A média das notas é:', resultado);

//Questão8
// function imc(peso: number, altura: number): number {
    
//     return peso / (altura * altura);
// }
// const peso = 70;       
// const altura = 1.75;   
// const resultadoIMC = imc(peso, altura);

// console.log('O IMC é:', resultadoIMC.toFixed(2)); 
// //Questão9
// function calcularDesconto(valorOriginal: number, percentualDesconto: number): number {
    
//     const desconto = (valorOriginal * percentualDesconto) / 100;
//     const valorComDesconto = valorOriginal - desconto;
//     return valorComDesconto;
// }

// const valorProduto = 150;     
// const percentual = 20;        

// const valorFinal = calcularDesconto(valorProduto, percentual);

// console.log(`O valor final com ${percentual}% de desconto é: R$ ${valorFinal.toFixed(2)}`);

//Questão11
// function calcularMediaArredondada(numeros: number[]): number {
    
//     if (numeros.length === 0) {
//         throw new Error('A lista de números não pode estar vazia.');
//     }
    
//     const soma = numeros.reduce((acumulado, atual) => acumulado + atual, 0);
//     const media = soma / numeros.length;
    
//     return Math.round(media);
// }

// const listaNumeros = [5, 7, 3, 8, 10];
// const mediaArredondada = calcularMediaArredondada(listaNumeros);

// console.log('A média arredondada é:', mediaArredondada);
//Questão12
// Define a função 'contarDigitosParesImpares' que recebe um número inteiro e retorna a quantidade de dígitos pares e ímpares
// function contarDigitosParesImpares(numero: number): { pares: number, impares: number } {
    
//     // Converte o número para uma string e remove o sinal negativo, se houver
//     const numeroStr = Math.abs(numero).toString();

//     // Inicializa contadores para dígitos pares e ímpares
//     let contagemPares = 0;
//     let contagemImpares = 0;

//     // Itera sobre cada caractere da string
//     for (const caractere of numeroStr) {
//         const digito = parseInt(caractere, 10);

        
//         if (digito % 2 === 0) {
//             contagemPares++;
//         } else {
//             contagemImpares++;
//         }
//     }

//     return { pares: contagemPares, impares: contagemImpares };
// }

// const resultado = contarDigitosParesImpares(numero);

// console.log(`Quantidade de dígitos pares: ${resultado.pares}`);
// console.log(`Quantidade de dígitos ímpares: ${resultado.impares}`);

//Questão14
// function calcularIdade(anoNascimento: number): number {
//     // Obtém o ano atual
//     const anoAtual = new Date().getFullYear();
//     const idade = anoAtual - anoNascimento;
    
// }
// const idadeAtual = calcularIdade(anoNascimento);
// console.log(`A idade atual é: ${idadeAtual} anos.`);

//Questão15

// function gerarTabuada(numero: number): void {
//     // Itera de 1 a 10 para calcular e exibir a tabuada
//     for (let i = 1; i <= 10; i++) {
        
//         const resultado = numero * i;
//         console.log(`${numero} x ${i} = ${resultado}`);
//     }
// }



