"use strict";

var redessociais = ['Facebook', 'Instagram', 'Twitter'];
redessociais.forEach(function (net, index) {
  return console.log("".concat(index, " - Eu tenho conta na rede ").concat(net));
}); // o forEach não precisa ser salvo em um outro array ou variável

var alunos = ['João', 'Gabo', 'Nildio'];
var info = alunos.map(function (aluno, index) {
  return {
    matricula: index,
    nome: aluno,
    curso: 'front'
  };
});
console.log(info);
var gabo = info.findIndex(function (aluno) {
  return aluno.nome === 'Gabo';
});
var gabo1 = info.find(function (aluno) {
  return aluno.nome === 'Gaboo';
});
console.log(gabo1);
info.push({
  nome: 'Mumu',
  curso: 'back'
});
var alunosFront = info.every(function (aluno) {
  return aluno.curso === 'front';
}); //confere se todos os elementos do array satisfazem uma condição. O retorno é um booleano
console.log(alunosFront);
var alunosBack = info.some(function (aluno) {
  return aluno.curso === 'back';
}); //confere se pelo menos um elemento do array satisfaz a condição
console.log(alunosBack);
var alunosBack1 = info.some(function (aluno) {
  return aluno.curso === 'back' && aluno.curso === 'front';
}); //confere se pelo menos um elemento do array satisfaz a condição
console.log(alunosBack1);
var alunosBack2 = info.filter(function (aluno) {
  return aluno.curso === 'back';
});
console.log(alunosBack2);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (sum, item) {
  //isso é um somatório
  sum += item;
  return sum;
});
console.log(soma);