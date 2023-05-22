const names = ["Felipe", "João", "Julia", 10, false];

const joao = names[1];

names.push("Pedro");
names.unshift("Fernanda");
names.pop();
names.pop();
names.pop();

names[3] = "Gustavo"

//retorna a posição na lista
const indexOfFelipe = names.indexOf("Felipe");

//ordena a lista
const sortedNames = names.sort();

//verifica se é um array
const namesIsArray = Array.isArray(names);

console.log(names.length)
console.log(sortedNames);
console.log(namesIsArray);