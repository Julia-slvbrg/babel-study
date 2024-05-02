//REST

function somar (...nums){
    const sum = nums.reduce((accum, item) => {
        accum += item;
        return accum;
    }, 0)

    return sum
};  //assim dá pra passar inúmeros argumentos na função. Só pode passar um rest operator como argumento. mas pode passar por exemplo function xxxx(nome, sobrenome, ...nums){}

console.log(somar(10, 20, 30));


//SPREAD

const nums = [1, 2, 3, 4];
const nums1 = [1000, 2000, 3000, 4000];

const totalNums = [...nums, ...nums1]
console.log(totalNums);

//DESESTRUTURAÇÃO

const carroJulia = {    
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
};

const carroAna = {
    ...carroJulia,
    motor: 1.8
};

const {motor: motorAna} = carroAna;
const {motor: motorJulia} = carroJulia


console.log({motorAna});
console.log({motorJulia});