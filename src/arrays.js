const redessociais = ['Facebook', 'Instagram', 'Twitter'];

redessociais.forEach((net, index) => console.log(`${index} - Eu tenho conta na rede ${net}`));  // o forEach não precisa ser salvo em um outro array ou variável

const alunos = ['João', 'Gabo', 'Nildio'];

const info = alunos.map((aluno, index) => {
    return{
        matricula: index,
        nome: aluno,
        curso: 'front'
    }
});

console.log(info);

const gabo = info.findIndex(aluno => aluno.nome === 'Gabo');
const gabo1 = info.find(aluno => aluno.nome === 'Gaboo');

console.log(gabo1);

info.push({
    nome: 'Mumu',
    curso: 'back'
});


const alunosFront = info.every(aluno => aluno.curso === 'front'); //confere se todos os elementos do array satisfazem uma condição. O retorno é um booleano
console.log(alunosFront);

const alunosBack = info.some(aluno => aluno.curso === 'back'); //confere se pelo menos um elemento do array satisfaz a condição
console.log(alunosBack);

const alunosBack1 = info.some(aluno => aluno.curso === 'back' && aluno.curso === 'front'); //confere se pelo menos um elemento do array satisfaz a condição
console.log(alunosBack1);

const alunosBack2 = info.filter(aluno => aluno.curso === 'back');
console.log(alunosBack2);


const nums = [10, 20, 30, 10];

const soma = nums.reduce((sum, item) => {  //isso é um somatório
    sum += item;
    return sum
});

console.log(soma);