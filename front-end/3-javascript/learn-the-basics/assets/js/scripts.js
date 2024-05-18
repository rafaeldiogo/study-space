/* - É uma linguagem de programação de alto nível;
- Considerada multiparadigma;
- Não necessita de setup, pode ser executada no navegador;
- Presente nos frameworks de front-end: React, Vue, Angular
- Pode ser utilizada no back-end também (Node.js);
- O nome correto é EcmaScript.   */

/* Como executar o JavaScript? */
/* - Primeira precisamos de um editor de código (VS Code);
- Vamos criar uma estrutura HTML com uma chamada de script;
- E por fim abrir o arquivo HTML no navegador;
- Acessando a aba console da inspeção de elementos, podemos monitorar o código JavaScript executado;
 */

//------Console--------
console.error("Este é um erro!");
console.warn("Este é um aviso!");
console.log("Esta é uma mensagem!");

//------Variáveis-------
var x = 10; // Não utilizar, optar pelo let
// Maneiras mais modernas
let y = 15; // escopo global
const z = 20;

if (1) {
  let y = 55; // escopo local
  console.log(y);
}

console.log(x);
console.log(y);
console.log(z);

y = 25; // reatribuindo valor a y
console.log(y);
/* z = 25; */ // não é possível alterar pois z é uma constante

//-------Tipos de Dados-------
// string
const name = "Rafael";
console.log(name);
console.log(typeof name);
// number
const shirtsQty = 4;
console.log(shirtsQty);
console.log(typeof shirtsQty);
// javascript não diferencia inteiro de decimal, são todos do tipo number
const decimal = 12.4;
console.log(decimal);
console.log(typeof decimal);
// boolean - são flags
const isApproved = false; // true ou false
console.log(isApproved);
console.log(typeof isApproved);
// null
let surname = null;
console.log(surname);
console.log(typeof surname);
// Atribuindo valor a variável surname para deixar de ser null
surname = "Diogo";
console.log(surname);
console.log(typeof surname);
// undefined
let age;
console.log(age);
console.log(typeof age);

age = 30;
console.log(age);
console.log(typeof age);
// Array
const languages = ["JavaScript", "PHP", "Python"];
console.log(languages);
console.log(typeof languages);
// Object
const user = {
  // object literals
  email: "rafael@teste.com",
  password: "teste1",
};
console.log(user);
console.log(typeof user);

//--------Métodos de manipulação de string---------
// lenght - retorna o tamanho da string
const fullName = "Rafael Diogo";
console.log(fullName.length);
// split - transforma string em array
const stringToArray = fullName.split(" ");
console.log(stringToArray);
// toLowerCase - transforma a string em minúsculo
console.log(fullName.toLowerCase());
// toUpperCase - transforma a string em maiúsculo
console.log(fullName.toUpperCase());
// indexOf - retorna o índice da string
console.log(fullName.indexOf("Diogo"));
console.log("sdadsadsa".indexOf("Diogo")); // retorna negativo quando não existe o índice da palavra
// slice - extrair/resgatar uma parte de uma string
console.log(fullName.slice(0, 6));

//----------Métodos de manipulação de Arrays---------
const list = ["a", "b", "c", "d", "e"]; // o índice começa do 0
// length - retorna o tamanho do array
console.log(list.length);
// nome_do_array[elemento] - retorna o elemento na posicao/index desejado
console.log(list[2]);
// nome_do_array[elemento] = 'elemento que quer adicionar' - adiciona elemento na posicao/index desejado
list[5] = "f";
console.log(list);
// buscando o ultimo elemento do array
console.log(list[list.length - 1]);
// push - adiciona um elemento no fim do array
list.push("g");
console.log(list);
// pop - remove o ultimo elemento de um array
list.pop();
console.log(list);
// shift - remove o primeiro elemento de um array
list.shift();
console.log(list);
// unshift - adiciona um elemento no inicio do array
list.unshift("a");
console.log(list);

//-------Objetos---------------
const product = {
  name: "Camisa",
  price: 15.99,
  inStock: true,
  sizes: ["P", "M", "G"],
};
console.log(product.name);

//----------Destructuring---------
// em objeto
const { price, inStock } = product;
console.log(price);
console.log(inStock);
// em array
const [n1, n2] = list;
console.log(n1);
console.log(n2);

//---------JSON - Javascript Object Notation-----------
const dog = {
  name: "Shark",
  age: 10,
};
console.log("Objeto", dog);
// Transforma objeto em JSON
const json = JSON.stringify(dog);
console.log("JSON", json);
// Transforma JSON em objeto
const obj = JSON.parse(json);
console.log("Objeto de novo", obj);

//--------Estruturas Condicionais-----------
// if
const a = 10;
if (a > 8) {
  console.log("A é maior que 8.");
}
// else if, else
const b = "Matheus";
// === - verifica o tipo e o valor. É uma boa prática utilizar
if (b === "João") {
  console.log("O nome é João");
} else if (b === "Pedro") {
  console.log("O nome é Pedro");
} else {
  console.log("Não encontramos o nome do usuário!");
}
// if ternário
const someNumber = 14;
let testingANumber = someNumber < 20 ? "Yes" : "No";
console.log(testingANumber);

//-------Estruturas de Repetição (loop)----------------
const myList = [1, 2, 3, 4, 5];
let counter = 0;
// while
while (counter < myList.length) {
  console.log("Imprimindo: " + myList[counter]);
  counter++; // incremento - counter = counter + 1
}
// for
const mySecondList = ["a", "b", "c", "d", "e"];
for (let counter = 0; counter < mySecondList.length; counter++) {
  console.log(`Imprimindo: ${mySecondList[counter]}`);
}

//--------Métodos de Array - Repetição--------------
const names = ["Rafael", "João", "Pedro", "Maria"];
// foreach
names.forEach(function (name) {
  console.log(`O nome é: ${name}`);
});
// map - percorre o array
// O map cria um novo array após ser feito a modificação desejada
const modifiedNames = names.map(function (name) {
  if (name === "Rafael") {
    return "Sr. Rafael";
  } else {
    return name;
  }
});
console.log(modifiedNames);
console.log(names);
// filter - filtra o array a partir de uma condição desejada
const bigNumbers = [1, 2, 3, 4, 5, 10, 100].filter(function (number) {
  return number >= 5;
});
console.log(bigNumbers);
// reduce - reduz o array a um elemento
const initialValue = 0;
const sumAll = [10, 20, 30, 40, 50].reduce(function (total, number) {
  return total + number;
}, initialValue);
console.log(sumAll);

//-----------Funções-----------------
function minhaFuncao() {
  console.log("Olá, função!");
}
minhaFuncao();
// parâmetros
function nomeCompleto(nome, sobrenome) {
  return `O nome completo é: ${nome} ${sobrenome}`;
}
console.log(nomeCompleto("Rafael", "Diogo"));
// forma mais utilizada
const primerioNome = "Maria";
const segundoNome = "Matos";
const meuNomeCompleto = nomeCompleto(primerioNome, segundoNome);
console.log(meuNomeCompleto);
// arrow function
const myArrowFunction = (a, b) => {
  return a + b;
};
console.log(myArrowFunction(2, 5));
// arrow function simples
const mySimpleArrowFunction = (a, b) => a + b;
console.log(mySimpleArrowFunction(5, 5));

//------------Classes-------------
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productDetails() {
    return `O nome do produto é ${this.name} e o preço é R$${this.price}`;
  }
}
const socks = new Product("Meia Branca", 10.99);
const shirt = new Product("Camisa Preta", 22.99);
console.log(socks.name);
console.log(socks.price);
console.log(socks.productDetails());
console.log(shirt.name);
console.log(shirt.productDetails());
// herança
class SuperProduct extends Product {
  constructor(name, price, size) {
    super(name, price);
    this.size = size;
  }

  showAdjective(adjective) {
    return `O ${this.name} é muito ${adjective}`;
  }

  // static - utiliza a classe sem precisar criar uma instancia
  static sayHello() {
    console.log("Hello");
  }
}

const sneaker = new SuperProduct("Tênis Vermelho", 59.9, "42");
console.log(sneaker.name);
console.log(sneaker.size);
console.log(sneaker.showAdjective("Bom"));
SuperProduct.sayHello();

//----------------DOM - Document Object Model--------------
// Seleção de elementos
// getElementById - Selecionando por ID. Só pode selecionar ID
const title = document.getElementById("title");
console.log(title);
// query selector - pode selecionar tanto id como class
const sameTitle = document.querySelector("#title");
console.log(sameTitle);
const texts = document.querySelectorAll(".text");
console.log(texts);
console.log(texts[1]);

texts.forEach((text) => {
  console.log(text.textContent.toUpperCase());
});
// Manipulação de elemento
// alterando texto
title.textContent = "Mudei o texto";
// alterando o html
texts[0].innerHTML = "<span>Alterando o HTML deste Elemento</span>";
// alterando o estilo (CSS)
texts[1].style.backgroundColor = "red"; // background-color: 'red'
// adicionando classe
texts[2].classList.add("my-class");
// removendo uma classe
texts[2].classList.remove("text");
// remove o elemento do DO
texts[3].remove();
// eventos
const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    texts[2].style.backgroundColor = "blue";
});
