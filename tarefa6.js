// 1. Gere uma lista contendo apenas os números pares (filter)
const numeros = [1, 4, 10, 23, 26, 27, 29, 30, 311, 320, 4490]
const ehpar = (n) => (n % 2) == 0;
pares = numeros.filter(ehpar);

// 2. Faça uma lista que possua apenas frutas com quatro letras (filter)
// Dica: você pode usar 'string'.length para verificar a quantidade de
// caracteres de uma string.

const frutas = [
  'maçã', 'banana', 'pera', 'uva', 'coco', 'caqui', 'kiwi', 'acerola'
]
const quatroletras = (n) => n.length == 4;
const frutas4 = frutas.filter(quatroletras);


// 3. Maiusculize os nomes dados (map)
// Dica: Maiusculizar é escrever cada palavra com a inicial em
// maiúsculo. Você pode conferir todos os métodos de String em:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos

const nomes = ['cecília', 'roberto', 'bruna', 'Osvaldo', 'Carlos']
const titlecase = (n) => n[0].toUpperCase() + n.slice(1,n.length);
const maiusculas = nomes.map(titlecase);


// 4. Concatene os nomes e sobrenomes da lista (map)
const nomesESobrenomes = [
  ['Fernanda', 'Montenegro'],
  ['Lázaro', 'Ramos'],
  ['Heloísa', 'Périssé'],
  ['Daniel', 'Furlan'],
  ['Adriana', 'Esteves'],
]

const juntar = (n) => n[0] + ' ' + n[1];

const juntos = nomesESobrenomes.map(juntar);

// 5. Calcule a média das notas (reduce)
const notas = [7, 5, 4, 3, 8.5]

const soma = (a,b) => a + b;

const media = notas.reduce(soma, 0)/notas.length;

// 6. Calcule a média ponderada das notas (reduce)
// Cada item da lista é composto por uma sublista com a nota (na
// primeira posição) e o peso (na segunda posição).

const notasComPeso = [[7, 2], [5, 1], [4, 2], [3, 1], [8.5, 2]]

const ponderadafunc = (a,b) => a + b[0]*b[1];

const somap = (a,b) => a + b[1];

const somadospesos = notasComPeso.reduce(somap, 0)

const ponderada = notasComPeso.reduce(ponderadafunc, 0)/somadospesos;



// 7. (Extra) Refaça o exercício 6 tirando as duas menores notas. Dica:
// Lembre dos métodos sort e slice.

notasComPeso.sort();
novasNotas = notasComPeso.slice(2, notasComPeso.length);

const Nponderadafunc = (a,b) => a + b[0]*b[1];

const Nsomap = (a,b) => a + b[1];

const Nsomadospesos = novasNotas.reduce(Nsomap, 0)

const Nponderada = novasNotas.reduce(Nponderadafunc, 0)/Nsomadospesos;
