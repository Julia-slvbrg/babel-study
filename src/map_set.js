//MAP

let meuMap = new Map(); //cria grupos chave valor. O primeiro item é a chave, ela é única e não pode se repetir, o segundo é o valor, que pode ser repetido. Se só passar um item, ele vai ser a chave e o valor vai ser undefined
meuMap.set('nome', 'julia');
meuMap.set('gabo');
meuMap.set('gabo', 'gato');
meuMap.set('nildio', 'gato');

const nome = meuMap.get('nome')

console.log(meuMap);
console.log(meuMap.size);
console.log(nome);
console.log(meuMap.has('gabo'));

//SET

const cpfs = new Set();  // o set cria um array de ITENS únicos, os itens são as próprias chaves

cpfs.add('70119065096');
cpfs.add('52036220002');
cpfs.add('05891241021');

console.log(cpfs);

const arr = ['gabo', 'nildio', 'mumu', 'gabo', 'nildio'];

const setArr = new Set([...arr]); //isso aqui vai gerar um set sem os dados duplicados que tinha no array
console.log(setArr);

const arrSemDuplicados = [...setArr];
console.log(arrSemDuplicados);