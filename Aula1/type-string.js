// Aula 01 - Tipos Primitivos
// Tipo String

// Uso das aspas simples ou duplas na atribuição da string
const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
console.log(texto1);
console.log(texto2);


// Uso palavras e números (símbolo númerico) como caracteres na string
const senha = "senhaSuperSegura1234";
console.log(senha);


// Os números dentro da string são considerados como caracteres e não aprensentam valor numérico
const StringDeNumeros = "34567";
console.log(StringDeNumeros);


// Uso de aspas dentro das aspas
const citacao1 = "Ele disse 'Oi!'"; // aparecem as aspas simples quando imprime
const citacao2 = 'Ele disse "Oi!"'; // aparecem as aspas duplas quando imprime
console.log(citacao1);
console.log(citacao2);


// Concatenação (+)
const citacao3 = "Meu nome é ";
const meuNome = "Morgana";
console.log(citacao3 + meuNome);


// Pesquisar a diferença entre template string OU template literal